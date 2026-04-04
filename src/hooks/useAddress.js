'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useStore } from '../store/useStore';
import {
  getCustomerAddresses as getCustomerAddressesService,
  addCustomerAddress as addCustomerAddressService,
  setDefaultAddress as setDefaultAddressService,
  deleteAddress as deleteAddressService,
} from '../services/address.service';

const QUERY_KEYS = {
  ADDRESSES: 'addresses',
};

export function useAddress(customerUuid) {
  const queryClient = useQueryClient();
  const { showSnackbar } = useStore();

  // Get customer addresses query
  const {
    data: addressesData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEYS.ADDRESSES, customerUuid],
    queryFn: () => getCustomerAddressesService(customerUuid),
    enabled: !!customerUuid, // Only fetch if customerUuid is provided
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  const addresses = addressesData?.data || [];

  // Add address mutation
  const addAddressMutation = useMutation({
    mutationFn: (addressData) => addCustomerAddressService(customerUuid, addressData),
    onSuccess: (response) => {
      queryClient.invalidateQueries([QUERY_KEYS.ADDRESSES, customerUuid]);
      showSnackbar(response.message || 'Address added successfully', 'success');
    },
    onError: (error) => {
      console.error('Add address error:', error.message);
      showSnackbar(error.message || 'Failed to add address', 'error');
    },
  });

  // Set default address mutation
  const setDefaultMutation = useMutation({
    mutationFn: (addressId) => setDefaultAddressService(customerUuid, addressId),
    onSuccess: (response) => {
      queryClient.invalidateQueries([QUERY_KEYS.ADDRESSES, customerUuid]);
      showSnackbar(response.message || 'Default address updated', 'success');
    },
    onError: (error) => {
      console.error('Set default address error:', error.message);
      showSnackbar(error.message || 'Failed to set default address', 'error');
    },
  });

  // Delete address mutation
  const deleteAddressMutation = useMutation({
    mutationFn: (addressId) => deleteAddressService(customerUuid, addressId),
    onSuccess: (response) => {
      queryClient.invalidateQueries([QUERY_KEYS.ADDRESSES, customerUuid]);
      showSnackbar(response.message || 'Address deleted successfully', 'success');
    },
    onError: (error) => {
      console.error('Delete address error:', error.message);
      showSnackbar(error.message || 'Failed to delete address', 'error');
    },
  });

  return {
    // Address data
    addresses,
    isLoading,
    isError,
    error,
    refetch,

    // Mutations
    addAddress: addAddressMutation.mutate,
    addAddressAsync: addAddressMutation.mutateAsync,
    isAddingAddress: addAddressMutation.isPending,

    setDefaultAddress: setDefaultMutation.mutate,
    setDefaultAddressAsync: setDefaultMutation.mutateAsync,
    isSettingDefault: setDefaultMutation.isPending,

    deleteAddress: deleteAddressMutation.mutate,
    deleteAddressAsync: deleteAddressMutation.mutateAsync,
    isDeletingAddress: deleteAddressMutation.isPending,
  };
}
