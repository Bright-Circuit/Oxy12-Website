'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useStore } from '../store/useStore';
import { setAuthCookies, clearAuthCookies } from '../lib/cookies';
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
  forgotPassword as forgotPasswordService,
  resetPassword as resetPasswordService,
  verifyEmail as verifyEmailService,
  getCurrentUser as getCurrentUserService,
} from '../services/auth.service';
import React from 'react';

const QUERY_KEYS = {
  AUTH: 'auth',
};

export function useAuth() {
  const queryClient = useQueryClient();
  const { setAuth, clearAuth, user, isAuthenticated } = useStore();

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (credentials) => loginService(credentials),
    onSuccess: (response) => {
      const { user, accessToken, refreshToken, role } = response.data;
      
      // Set cookies
      setAuthCookies(accessToken, refreshToken, role);
      
      // Update store
      setAuth(user, accessToken, refreshToken, role);
      
      queryClient.invalidateQueries([QUERY_KEYS.AUTH]);
    },
    onError: (error) => {
      console.error('Login error:', error.message);
      throw error;
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: (userData) => registerService(userData),
    onSuccess: (response) => {
      const { user, accessToken, refreshToken, role } = response.data;
      
      // Set cookies
      setAuthCookies(accessToken, refreshToken, role);
      
      // Update store
      setAuth(user, accessToken, refreshToken, role);
      
      queryClient.invalidateQueries([QUERY_KEYS.AUTH]);
    },
    onError: (error) => {
      console.error('Register error:', error.message);
      throw error;
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: () => logoutService(),
    onSuccess: () => {
      // Clear cookies
      clearAuthCookies();
      
      // Clear store
      clearAuth();
      
      queryClient.clear();
    },
    onError: (error) => {
      console.error('Logout error:', error.message);
      // Still clear on error
      clearAuthCookies();
      clearAuth();
      queryClient.clear();
    },
  });

  // Forgot password mutation
  const forgotPasswordMutation = useMutation({
    mutationFn: (email) => forgotPasswordService(email),
    onError: (error) => {
      console.error('Forgot password error:', error.message);
      throw error;
    },
  });

  // Reset password mutation
  const resetPasswordMutation = useMutation({
    mutationFn: ({ token, newPassword }) =>
      resetPasswordService(token, newPassword),
    onError: (error) => {
      console.error('Reset password error:', error.message);
      throw error;
    },
  });

  // Verify email mutation
  const verifyEmailMutation = useMutation({
    mutationFn: (token) => verifyEmailService(token),
    onError: (error) => {
      console.error('Verify email error:', error.message);
      throw error;
    },
  });

  // Helper wrappers
  const login = async (credentials) => {
    return await loginMutation.mutateAsync(credentials);
  };

  const register = async (userData) => {
    return await registerMutation.mutateAsync(userData);
  };

  const logout = async () => {
    return await logoutMutation.mutateAsync();
  };

  const forgotPassword = async (email) => {
    return await forgotPasswordMutation.mutateAsync(email);
  };

  const resetPassword = async (token, newPassword) => {
    return await resetPasswordMutation.mutateAsync({ token, newPassword });
  };

  const verifyEmail = async (token) => {
    return await verifyEmailMutation.mutateAsync(token);
  };

  return {
    // State
    user,
    isAuthenticated,

    // Login
    login,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    loginSuccess: loginMutation.isSuccess,
    loginData: loginMutation.data,
    resetLogin: loginMutation.reset,

    // Register
    register,
    isRegistering: registerMutation.isPending,
    registerError: registerMutation.error,
    registerSuccess: registerMutation.isSuccess,
    registerData: registerMutation.data,
    resetRegister: registerMutation.reset,

    // Logout
    logout,
    isLoggingOut: logoutMutation.isPending,
    logoutError: logoutMutation.error,

    // Forgot password
    forgotPassword,
    isSendingResetEmail: forgotPasswordMutation.isPending,
    forgotPasswordError: forgotPasswordMutation.error,
    forgotPasswordSuccess: forgotPasswordMutation.isSuccess,
    resetForgotPassword: forgotPasswordMutation.reset,

    // Reset password
    resetPassword,
    isResettingPassword: resetPasswordMutation.isPending,
    resetPasswordError: resetPasswordMutation.error,
    resetPasswordSuccess: resetPasswordMutation.isSuccess,
    resetResetPassword: resetPasswordMutation.reset,

    // Verify email
    verifyEmail,
    isVerifyingEmail: verifyEmailMutation.isPending,
    verifyEmailError: verifyEmailMutation.error,
    verifyEmailSuccess: verifyEmailMutation.isSuccess,
    resetVerifyEmail: verifyEmailMutation.reset,
  };
}

/**
 * Hook to get current user (cookie-based auth)
 */
export function useCurrentUser() {
  const { setAuth, clearAuth } = useStore();

  const {
    data: userData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUserService,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  });
  console.log("Userdata",userData)
  const user = userData?.data || null;

  // Update store when user data is fetched - MUST be in useEffect to avoid infinite loop
  React.useEffect(() => {
    if (user && !isLoading && !isError) {
      setAuth(user, null, null, user.role);
    }
  }, [user, isLoading, isError, setAuth]);

  // Clear store if fetch fails (unauthorized) - MUST be in useEffect
  React.useEffect(() => {
    if (isError) {
      clearAuth();
    }
  }, [isError, clearAuth]);

  return {
    user,
    isLoading,
    isError,
    error,
    refetch,
    isAuthenticated: !!user,
  };
}
