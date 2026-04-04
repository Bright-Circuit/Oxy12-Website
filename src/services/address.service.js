import { apiGet, apiPost, apiPut, apiDelete } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Get all customer addresses
 */
export async function getCustomerAddresses(customerUuid) {
  try {
    const response = await apiGet(API_ENDPOINTS.CUSTOMER_ADDRESSES, {
      params: { customerUuid },
    });
    
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Addresses fetched successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch addresses');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching addresses';
    throw new Error(message);
  }
}

/**
 * Add new address
 */
export async function addCustomerAddress(customerUuid, addressData) {
  try {
    const response = await apiPost(
      API_ENDPOINTS.ADD_CUSTOMER_ADDRESS,
      addressData,
      {
        params: { customerUuid },
      }
    );
    
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Address added successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to add address');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while adding address';
    throw new Error(message);
  }
}

/**
 * Set default address
 */
export async function setDefaultAddress(customerUuid, addressId) {
  try {
    const response = await apiPut(
      `${API_ENDPOINTS.SET_DEFAULT_ADDRESS}/${addressId}/set-default`,
      {},
      {
        params: { customerUuid },
      }
    );
    
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Default address updated',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to set default address');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while setting default address';
    throw new Error(message);
  }
}

/**
 * Delete address
 */
export async function deleteAddress(customerUuid, addressId) {
  try {
    const response = await apiDelete(
      `${API_ENDPOINTS.DELETE_ADDRESS}/${addressId}`,
      {
        params: { customerUuid },
      }
    );
    
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Address deleted successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to delete address');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while deleting address';
    throw new Error(message);
  }
}
