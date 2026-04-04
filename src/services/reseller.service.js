import { apiGet, apiPost, apiPut, apiDelete } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Get reseller dashboard data
 */
export async function getResellerDashboard() {
  try {
    const response = await apiGet(API_ENDPOINTS.RESELLER_DASHBOARD);
    
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
 * Get reseller inventory
 */
export async function getResellerInventory(params = {}) {
  try {
    const response = await apiGet(API_ENDPOINTS.RESELLER_INVENTORY, { params });
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch inventory');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching inventory';
    throw new Error(message);
  }
}

/**
 * Update inventory item
 */
export async function updateInventoryItem(itemId, itemData) {
  try {
    const response = await apiPut(
      `${API_ENDPOINTS.RESELLER_INVENTORY}/${itemId}`,
      itemData
    );
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Inventory updated successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to update inventory');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while updating inventory';
    throw new Error(message);
  }
}

/**
 * Get reseller sales
 */
export async function getResellerSales(params = {}) {
  try {
    const response = await apiGet(API_ENDPOINTS.RESELLER_SALES, { params });
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch sales');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching sales';
    throw new Error(message);
  }
}

/**
 * Get sale by ID
 */
export async function getResellerSaleById(saleId) {
  try {
    const response = await apiGet(`${API_ENDPOINTS.RESELLER_SALES}/${saleId}`);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch sale');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching sale';
    throw new Error(message);
  }
}

/**
 * Create sale
 */
export async function createSale(saleData) {
  try {
    const response = await apiPost(API_ENDPOINTS.RESELLER_SALES, saleData);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Sale created successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to create sale');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while creating sale';
    throw new Error(message);
  }
}
