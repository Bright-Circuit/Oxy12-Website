import { apiGet, apiPost, apiPatch, apiDelete } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Get current cart (guest or customer)
 */
export async function getCart() {
  try {
    const response = await apiGet(API_ENDPOINTS.CART);
    
    // The new API returns cart data directly, not wrapped in a status object
    if (response.data) {
      return {
        success: true,
        data: response.data,
        message: 'Cart fetched successfully',
      };
    }
    
    throw new Error('Failed to fetch cart');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching cart';
    throw new Error(message);
  }
}

/**
 * Add item to cart
 */
export async function addToCart(item) {
  try {
    const payload = {
      productUuid: item.productUuid,
      quantity: item.quantity || 1,
    };

    // Add variantId if available
    if (item.variantUuid) {
      payload.variantUuid = item.variantUuid;
    }

    const response = await apiPost(API_ENDPOINTS.CART_ADD_ITEM, payload);
    console.log("Response ",response)
    if (response.data?.status === 'success') {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Item added to cart',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to add item to cart');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while adding item to cart';
    throw new Error(message);
  }
}

/**
 * Update cart item quantity
 */
export async function updateCartItem(itemUuid, quantity) {
  try {
    const response = await apiPatch(
      `${API_ENDPOINTS.CART_UPDATE_ITEM}/${itemUuid}`,
      { quantity }
    );
    
    if (response.data?.status === 'success') {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Cart updated',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to update cart item');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while updating cart item';
    throw new Error(message);
  }
}

/**
 * Remove item from cart
 */
export async function removeFromCart(itemUuid) {
  try {
    const response = await apiDelete(
      `${API_ENDPOINTS.CART_REMOVE_ITEM}/${itemUuid}`
    );
    
    if (response.data?.status === 'success') {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Item removed from cart',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to remove item from cart');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while removing item from cart';
    throw new Error(message);
  }
}

/**
 * Merge guest cart to customer cart (after login)
 */
export async function mergeCart(customerUuid) {
  try {
    const response = await apiPost(
      API_ENDPOINTS.CART_MERGE,
      {},
      {
        headers: {
          'X-Customer-UUID': customerUuid,
        },
      }
    );
    
    if (response.data?.status === 'success') {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Cart merged successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to merge cart');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while merging cart';
    throw new Error(message);
  }
}
