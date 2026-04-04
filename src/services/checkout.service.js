import { apiPost } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Prepare checkout
 * @param {Object} checkoutData - Checkout data
 * @param {Array<string>} checkoutData.selectedItemUuids - Selected cart item UUIDs (optional)
 * @param {string} checkoutData.courierUuid - Courier UUID (required)
 * @param {number} checkoutData.paymentMethodId - Payment method ID (required)
 * @param {string} checkoutData.deliveryNotes - Delivery notes (optional)
 */
export async function prepareCheckout(checkoutData) {
  try {
    const response = await apiPost(API_ENDPOINTS.CHECKOUT_PREPARE, checkoutData);
    console.log("Check",response)
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Checkout prepared successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to prepare checkout');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while preparing checkout';
    throw new Error(message);
  }
}
