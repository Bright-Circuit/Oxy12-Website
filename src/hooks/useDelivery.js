'use client';

import { useQuery } from '@tanstack/react-query';
import { getActiveCouriers } from '../services/delivery.service';

const QUERY_KEYS = {
  COURIERS: 'couriers',
};

export function useDelivery() {
  // Get active couriers query
  const {
    data: couriersData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEYS.COURIERS],
    queryFn: getActiveCouriers,
    staleTime: 1000 * 60 * 10, // 10 minutes (couriers don't change often)
    retry: 1,
  });

  const couriers = couriersData?.data || [];

  return {
    couriers,
    isLoading,
    isError,
    error,
    refetch,
  };
}
