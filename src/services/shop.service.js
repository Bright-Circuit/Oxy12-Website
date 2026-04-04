import { apiPost } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Filter shop products with advanced filtering capabilities
 * @param {Object} filterData - Filter criteria
 * @param {string} filterData.categoryUuid - Category UUID (optional)
 * @param {number} filterData.minPrice - Minimum price (optional)
 * @param {number} filterData.maxPrice - Maximum price (optional)
 * @param {Array<string>} filterData.attributeValueUuids - Attribute value UUIDs (optional)
 * @param {boolean} filterData.inStockOnly - Filter in-stock products only (optional)
 * @param {number} filterData.page - Page number (zero-based, optional, default: 0)
 * @param {number} filterData.size - Items per page (optional, default: 20)
 * @param {string} filterData.sortBy - Sort field: "price", "title", "dateCreated" (optional)
 * @param {string} filterData.sortDirection - Sort direction: "ASC", "DESC" (optional)
 * @returns {Promise<Object>} Paginated shop products
 */
export async function filterShopProducts(filterData) {
  try {
    const response = await apiPost(API_ENDPOINTS.SHOP_PRODUCTS_FILTER, filterData);
    
    if (response.data?.success === true) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Products retrieved successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to retrieve products');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while retrieving products';
    throw new Error(message);
  }
}
