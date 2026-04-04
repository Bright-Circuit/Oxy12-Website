'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getResellerDashboard,
  getResellerInventory,
  updateInventoryItem,
  getResellerSales,
  getResellerSaleById,
  createSale,
} from '../services/reseller.service';

const QUERY_KEYS = {
  RESELLER_DASHBOARD: 'resellerDashboard',
  RESELLER_INVENTORY: 'resellerInventory',
  RESELLER_SALES: 'resellerSales',
  RESELLER_SALE: 'resellerSale',
};

export function useReseller() {
  const queryClient = useQueryClient();

  // Dashboard query
  const {
    data: dashboardData,
    isLoading: isDashboardLoading,
    error: dashboardError,
    refetch: refetchDashboard,
  } = useQuery({
    queryKey: [QUERY_KEYS.RESELLER_DASHBOARD],
    queryFn: () => getResellerDashboard(),
    select: (response) => response.data,
  });

  // Inventory query
  const useInventoryQuery = (params) => {
    return useQuery({
      queryKey: [QUERY_KEYS.RESELLER_INVENTORY, params],
      queryFn: () => getResellerInventory(params),
      select: (response) => response.data,
    });
  };

  // Update inventory mutation
  const updateInventoryMutation = useMutation({
    mutationFn: ({ itemId, itemData }) => updateInventoryItem(itemId, itemData),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.RESELLER_INVENTORY]);
    },
    onError: (error) => {
      console.error('Update inventory error:', error.message);
      throw error;
    },
  });

  // Sales query
  const useSalesQuery = (params) => {
    return useQuery({
      queryKey: [QUERY_KEYS.RESELLER_SALES, params],
      queryFn: () => getResellerSales(params),
      select: (response) => response.data,
    });
  };

  // Sale by ID query
  const useSaleQuery = (saleId) => {
    return useQuery({
      queryKey: [QUERY_KEYS.RESELLER_SALE, saleId],
      queryFn: () => getResellerSaleById(saleId),
      select: (response) => response.data,
      enabled: !!saleId,
    });
  };

  // Create sale mutation
  const createSaleMutation = useMutation({
    mutationFn: (saleData) => createSale(saleData),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.RESELLER_SALES]);
    },
    onError: (error) => {
      console.error('Create sale error:', error.message);
      throw error;
    },
  });

  return {
    // Dashboard
    dashboardData,
    isDashboardLoading,
    dashboardError,
    refetchDashboard,

    // Inventory
    useInventoryQuery,
    updateInventory: async (itemId, itemData) =>
      await updateInventoryMutation.mutateAsync({ itemId, itemData }),
    isUpdatingInventory: updateInventoryMutation.isPending,
    updateInventoryError: updateInventoryMutation.error,
    updateInventorySuccess: updateInventoryMutation.isSuccess,
    resetUpdateInventory: updateInventoryMutation.reset,

    // Sales
    useSalesQuery,
    useSaleQuery,
    createSale: async (saleData) =>
      await createSaleMutation.mutateAsync(saleData),
    isCreatingSale: createSaleMutation.isPending,
    createSaleError: createSaleMutation.error,
    createSaleSuccess: createSaleMutation.isSuccess,
    resetCreateSale: createSaleMutation.reset,
  };
}
