import { apiGet, apiPost, apiPut, apiDelete } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Login service
 */
export async function login(credentials) {
  try {
    const response = await apiPost(API_ENDPOINTS.LOGIN, credentials);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Login successful',
      };
    }
    
    throw new Error(response.data?.message || 'Login failed');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred during login';
    throw new Error(message);
  }
}

/**
 * Register service
 */
export async function register(userData) {
  try {
    const response = await apiPost(API_ENDPOINTS.REGISTER, userData);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Registration successful',
      };
    }
    
    throw new Error(response.data?.message || 'Registration failed');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred during registration';
    throw new Error(message);
  }
}

/**
 * Logout service
 */
export async function logout() {
  try {
    const response = await apiPost(API_ENDPOINTS.LOGOUT);
    
    return {
      success: true,
      message: response.data?.message || 'Logout successful',
    };
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred during logout';
    throw new Error(message);
  }
}

/**
 * Refresh token service
 */
export async function refreshToken(token) {
  try {
    const response = await apiPost(API_ENDPOINTS.REFRESH_TOKEN, {
      refreshToken: token,
    });
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Token refreshed',
      };
    }
    
    throw new Error(response.data?.message || 'Token refresh failed');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while refreshing token';
    throw new Error(message);
  }
}

/**
 * Forgot password service
 */
export async function forgotPassword(email) {
  try {
    const response = await apiPost(API_ENDPOINTS.FORGOT_PASSWORD, { email });
    
    if (response.data?.success) {
      return {
        success: true,
        message: response.data.message || 'Password reset email sent',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to send reset email');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while sending reset email';
    throw new Error(message);
  }
}

/**
 * Reset password service
 */
export async function resetPassword(token, newPassword) {
  try {
    const response = await apiPost(API_ENDPOINTS.RESET_PASSWORD, {
      token,
      newPassword,
    });
    
    if (response.data?.success) {
      return {
        success: true,
        message: response.data.message || 'Password reset successful',
      };
    }
    
    throw new Error(response.data?.message || 'Password reset failed');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while resetting password';
    throw new Error(message);
  }
}

/**
 * Verify email service
 */
export async function verifyEmail(token) {
  try {
    const response = await apiPost(API_ENDPOINTS.VERIFY_EMAIL, { token });
    
    if (response.data?.success) {
      return {
        success: true,
        message: response.data.message || 'Email verified successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Email verification failed');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred during email verification';
    throw new Error(message);
  }
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser() {
  try {
    const response = await apiGet(API_ENDPOINTS.CURRENT_USER);
    console.log("Response here",response.data.data)
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'User fetched successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch current user');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching user';
    throw new Error(message);
  }
}

/**
 * Login with cookie-based authentication (for auth-frontend)
 */
export async function loginWithCookie(credentials) {
  try {
    const response = await apiPost(API_ENDPOINTS.LOGIN_COOKIE, credentials);
    
    if (response.data?.status === 'success') {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Login successful',
      };
    }
    
    throw new Error(response.data?.message || 'Login failed');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred during login';
    throw new Error(message);
  }
}
