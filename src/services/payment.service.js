import { apiGet } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Get all payment methods
 * @param {string} type - Optional filter by type: 'ONLINE', 'OFFLINE', or 'POS'
 */
export async function getPaymentMethods(type = null) {
  try {
    const params = type ? { type } : {};
    const response = await apiGet(API_ENDPOINTS.PAYMENT_METHODS, { params });
    
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Payment methods fetched successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch payment methods');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching payment methods';
    throw new Error(message);
  }
}
