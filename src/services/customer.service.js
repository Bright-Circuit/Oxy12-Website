import { apiGet, apiPost, apiPut, apiDelete } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Get customer dashboard data
 */
export async function getCustomerDashboard() {
  try {
    const response = await apiGet(API_ENDPOINTS.CUSTOMER_DASHBOARD);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch dashboard data');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching dashboard data';
    throw new Error(message);
  }
}

/**
 * Get customer orders
 */
export async function getCustomerOrders(params = {}) {
  try {
    const response = await apiGet(API_ENDPOINTS.CUSTOMER_ORDERS, { params });
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch orders');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching orders';
    throw new Error(message);
  }
}

/**
 * Get customer profile
 */
export async function getCustomerProfile() {
  try {
    const response = await apiGet(API_ENDPOINTS.CUSTOMER_PROFILE);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch profile');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching profile';
    throw new Error(message);
  }
}

/**
 * Update customer profile
 */
export async function updateCustomerProfile(profileData) {
  try {
    const response = await apiPut(API_ENDPOINTS.CUSTOMER_PROFILE, profileData);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Profile updated successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to update profile');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while updating profile';
    throw new Error(message);
  }
}

/**
 * Get customer wishlist
 */
export async function getCustomerWishlist() {
  try {
    const response = await apiGet(API_ENDPOINTS.CUSTOMER_WISHLIST);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch wishlist');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching wishlist';
    throw new Error(message);
  }
}

/**
 * Add product to wishlist
 */
export async function addToWishlist(productId) {
  try {
    const response = await apiPost(API_ENDPOINTS.CUSTOMER_WISHLIST, {
      productId,
    });
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Added to wishlist',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to add to wishlist');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while adding to wishlist';
    throw new Error(message);
  }
}

/**
 * Remove product from wishlist
 */
export async function removeFromWishlist(productId) {
  try {
    const response = await apiDelete(
      `${API_ENDPOINTS.CUSTOMER_WISHLIST}/${productId}`
    );
    
    if (response.data?.success) {
      return {
        success: true,
        message: response.data.message || 'Removed from wishlist',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to remove from wishlist');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while removing from wishlist';
    throw new Error(message);
  }
}
