'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useStore } from '../store/useStore';
import {
  getCart as getCartService,
  addToCart as addToCartService,
  updateCartItem as updateCartItemService,
  removeFromCart as removeFromCartService,
  mergeCart as mergeCartService,
} from '../services/cart.service';

const QUERY_KEYS = {
  CART: 'cart',
};

export function useCart() {
  const queryClient = useQueryClient();
  const { showSnackbar } = useStore();

  // Get cart query
  const {
    data: cartData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEYS.CART],
    queryFn: getCartService,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
  console.log("CartData",cartData?.data?.promoDiscount)
  const cart = cartData?.data || null;
  const cartItems = cart?.items || [];
  const cartCount = cart?.itemCount || 0;

  // Add to cart mutation
  const addToCartMutation = useMutation({
    mutationFn: addToCartService,
    onSuccess: (response) => {
      queryClient.invalidateQueries([QUERY_KEYS.CART]);
      showSnackbar(response.message || 'Item added to cart', 'success');
    },
    onError: (error) => {
      console.error('Add to cart error:', error.message);
      showSnackbar(error.message || 'Failed to add item to cart', 'error');
    },
  });

  // Update cart item mutation
  const updateCartMutation = useMutation({
    mutationFn: ({ itemUuid, quantity }) =>
      updateCartItemService(itemUuid, quantity),
    onSuccess: (response) => {
      queryClient.invalidateQueries([QUERY_KEYS.CART]);
      showSnackbar(response.message || 'Cart updated', 'success');
    },
    onError: (error) => {
      console.error('Update cart error:', error.message);
      showSnackbar(error.message || 'Failed to update cart', 'error');
    },
  });

  // Remove from cart mutation
  const removeFromCartMutation = useMutation({
    mutationFn: removeFromCartService,
    onSuccess: (response) => {
      queryClient.invalidateQueries([QUERY_KEYS.CART]);
      showSnackbar(response.message || 'Item removed from cart', 'success');
    },
    onError: (error) => {
      console.error('Remove from cart error:', error.message);
      showSnackbar(error.message || 'Failed to remove item', 'error');
    },
  });

  // Merge cart mutation (after login)
  const mergeCartMutation = useMutation({
    mutationFn: mergeCartService,
    onSuccess: (response) => {
      queryClient.invalidateQueries([QUERY_KEYS.CART]);
      showSnackbar(response.message || 'Cart merged successfully', 'success');
    },
    onError: (error) => {
      console.error('Merge cart error:', error.message);
      // Don't show error to user for cart merge failures
    },
  });

  return {
    // Cart data
    cart,
    cartItems,
    cartCount,
    isLoading,
    isError,
    error,
    refetch,

    // Mutations
    addToCart: addToCartMutation.mutate,
    addToCartAsync: addToCartMutation.mutateAsync,
    isAddingToCart: addToCartMutation.isPending,

    updateCartItem: updateCartMutation.mutate,
    updateCartItemAsync: updateCartMutation.mutateAsync,
    isUpdatingCart: updateCartMutation.isPending,

    removeFromCart: removeFromCartMutation.mutate,
    removeFromCartAsync: removeFromCartMutation.mutateAsync,
    isRemovingFromCart: removeFromCartMutation.isPending,

    mergeCart: mergeCartMutation.mutate,
    mergeCartAsync: mergeCartMutation.mutateAsync,
    isMergingCart: mergeCartMutation.isPending,
  };
}
