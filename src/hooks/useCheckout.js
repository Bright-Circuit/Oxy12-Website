'use client';

import { useMutation } from '@tanstack/react-query';
import { useStore } from '../store/useStore';
import { prepareCheckout as prepareCheckoutService } from '../services/checkout.service';

export function useCheckout() {
  const { showSnackbar } = useStore();

  // Prepare checkout mutation
  const prepareCheckoutMutation = useMutation({
    mutationFn: prepareCheckoutService,
    onSuccess: (response) => {
      // Don't show snackbar here, let the UI handle it
      console.log('Checkout prepared:', response.data);
    },
    onError: (error) => {
      console.error('Prepare checkout error:', error.message);
      showSnackbar(error.message || 'Failed to prepare checkout', 'error');
    },
  });

  return {
    prepareCheckout: prepareCheckoutMutation.mutate,
    prepareCheckoutAsync: prepareCheckoutMutation.mutateAsync,
    isPreparing: prepareCheckoutMutation.isPending,
    preparedData: prepareCheckoutMutation.data?.data || null,
    isError: prepareCheckoutMutation.isError,
    error: prepareCheckoutMutation.error,
    isSuccess: prepareCheckoutMutation.isSuccess,
    reset: prepareCheckoutMutation.reset,
  };
}
