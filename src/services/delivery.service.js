import { apiGet } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Get all active couriers
 */
export async function getActiveCouriers() {
  try {
    const response = await apiGet(API_ENDPOINTS.DELIVERY_COURIERS);
    
    // Response is direct array, not wrapped in APIResponse
    if (response.data && Array.isArray(response.data)) {
      return {
        success: true,
        data: response.data,
        message: 'Couriers fetched successfully',
      };
    }
    
    throw new Error('Failed to fetch couriers');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching couriers';
    throw new Error(message);
  }
}
