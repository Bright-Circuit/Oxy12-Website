'use client';

import { useQuery } from '@tanstack/react-query';
import { getPaymentMethods as getPaymentMethodsService } from '../services/payment.service';

const QUERY_KEYS = {
  PAYMENT_METHODS: 'paymentMethods',
};

export function usePayment(type = null) {
  // Get payment methods query
  const {
    data: paymentMethodsData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEYS.PAYMENT_METHODS, type],
    queryFn: () => getPaymentMethodsService(type),
    staleTime: 1000 * 60 * 10, // 10 minutes (payment methods don't change often)
    retry: 1,
  });

  const paymentMethods = paymentMethodsData?.data || [];

  return {
    paymentMethods,
    isLoading,
    isError,
    error,
    refetch,
  };
}
