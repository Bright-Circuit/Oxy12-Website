'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useStore } from '../store/useStore';
import {
  getCustomerDashboard,
  getCustomerOrders,
  getCustomerProfile,
  updateCustomerProfile,
  getCustomerWishlist,
  addToWishlist as addToWishlistService,
  removeFromWishlist as removeFromWishlistService,
} from '../services/customer.service';

const QUERY_KEYS = {
  CUSTOMER_DASHBOARD: 'customerDashboard',
  CUSTOMER_ORDERS: 'customerOrders',
  CUSTOMER_PROFILE: 'customerProfile',
  CUSTOMER_WISHLIST: 'customerWishlist',
};

export function useCustomer() {
  const queryClient = useQueryClient();
  const { setWishlist, wishlist } = useStore();

  // Dashboard query
  const {
    data: dashboardData,
    isLoading: isDashboardLoading,
    error: dashboardError,
    refetch: refetchDashboard,
  } = useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER_DASHBOARD],
    queryFn: () => getCustomerDashboard(),
    select: (response) => response.data,
  });

  // Orders query
  const useOrdersQuery = (params) => {
    return useQuery({
      queryKey: [QUERY_KEYS.CUSTOMER_ORDERS, params],
      queryFn: () => getCustomerOrders(params),
      select: (response) => response.data,
    });
  };

  // Profile query
  const {
    data: profileData,
    isLoading: isProfileLoading,
    error: profileError,
    refetch: refetchProfile,
  } = useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER_PROFILE],
    queryFn: () => getCustomerProfile(),
    select: (response) => response.data,
  });

  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: (profileData) => updateCustomerProfile(profileData),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CUSTOMER_PROFILE]);
    },
    onError: (error) => {
      console.error('Update profile error:', error.message);
      throw error;
    },
  });

  // Wishlist query
  const {
    data: wishlistData,
    isLoading: isWishlistLoading,
    error: wishlistError,
    refetch: refetchWishlist,
  } = useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER_WISHLIST],
    queryFn: () => getCustomerWishlist(),
    select: (response) => response.data,
    onSuccess: (data) => {
      setWishlist(data);
    },
  });

  // Add to wishlist mutation
  const addToWishlistMutation = useMutation({
    mutationFn: (productId) => addToWishlistService(productId),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CUSTOMER_WISHLIST]);
    },
    onError: (error) => {
      console.error('Add to wishlist error:', error.message);
      throw error;
    },
  });

  // Remove from wishlist mutation
  const removeFromWishlistMutation = useMutation({
    mutationFn: (productId) => removeFromWishlistService(productId),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.CUSTOMER_WISHLIST]);
    },
    onError: (error) => {
      console.error('Remove from wishlist error:', error.message);
      throw error;
    },
  });

  return {
    // Dashboard
    dashboardData,
    isDashboardLoading,
    dashboardError,
    refetchDashboard,

    // Orders
    useOrdersQuery,

    // Profile
    profileData,
    isProfileLoading,
    profileError,
    refetchProfile,
    updateProfile: async (profileData) =>
      await updateProfileMutation.mutateAsync(profileData),
    isUpdatingProfile: updateProfileMutation.isPending,
    updateProfileError: updateProfileMutation.error,
    updateProfileSuccess: updateProfileMutation.isSuccess,
    resetUpdateProfile: updateProfileMutation.reset,

    // Wishlist
    wishlistData: wishlistData || wishlist,
    isWishlistLoading,
    wishlistError,
    refetchWishlist,
    addToWishlist: async (productId) =>
      await addToWishlistMutation.mutateAsync(productId),
    isAddingToWishlist: addToWishlistMutation.isPending,
    addToWishlistError: addToWishlistMutation.error,
    addToWishlistSuccess: addToWishlistMutation.isSuccess,
    resetAddToWishlist: addToWishlistMutation.reset,

    removeFromWishlist: async (productId) =>
      await removeFromWishlistMutation.mutateAsync(productId),
    isRemovingFromWishlist: removeFromWishlistMutation.isPending,
    removeFromWishlistError: removeFromWishlistMutation.error,
    removeFromWishlistSuccess: removeFromWishlistMutation.isSuccess,
    resetRemoveFromWishlist: removeFromWishlistMutation.reset,
  };
}
