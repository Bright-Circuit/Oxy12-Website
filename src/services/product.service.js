import { apiGet, apiPost, apiPut, apiDelete } from '../api/apiManager';
import { API_ENDPOINTS } from '../lib/constants';

/**
 * Get all products
 */
export async function getProducts(params = {}) {
  try {
    const response = await apiGet(API_ENDPOINTS.PRODUCTS, { params });
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch products');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching products';
    throw new Error(message);
  }
}

/**
 * Get product by ID
 */
export async function getProductById(productId) {
  try {
    const response = await apiGet(`${API_ENDPOINTS.PRODUCTS}/${productId}`);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch product');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching product';
    throw new Error(message);
  }
}

/**
 * Get product by slug
 */
export async function getProductBySlug(slug) {
  try {
    const response = await apiGet(`${API_ENDPOINTS.PRODUCTS}/slug/${slug}`);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch product');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching product';
    throw new Error(message);
  }
}

/**
 * Search products
 */
export async function searchProducts(searchTerm, params = {}) {
  try {
    const response = await apiGet(API_ENDPOINTS.PRODUCT_SEARCH, {
      params: { q: searchTerm, ...params },
    });
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to search products');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while searching products';
    throw new Error(message);
  }
}

/**
 * Get product categories
 */
export async function getProductCategories() {
  try {
    const response = await apiGet(API_ENDPOINTS.PRODUCT_CATEGORIES);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch categories');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching categories';
    throw new Error(message);
  }
}

/**
 * Create product (Admin)
 */
export async function createProduct(productData) {
  try {
    const response = await apiPost(API_ENDPOINTS.ADMIN_PRODUCTS, productData);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Product created successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to create product');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while creating product';
    throw new Error(message);
  }
}

/**
 * Update product (Admin)
 */
export async function updateProduct(productId, productData) {
  try {
    const response = await apiPut(
      `${API_ENDPOINTS.ADMIN_PRODUCTS}/${productId}`,
      productData
    );
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message || 'Product updated successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to update product');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while updating product';
    throw new Error(message);
  }
}

/**
 * Delete product (Admin)
 */
export async function deleteProduct(productId) {
  try {
    const response = await apiDelete(
      `${API_ENDPOINTS.ADMIN_PRODUCTS}/${productId}`
    );
    
    if (response.data?.success) {
      return {
        success: true,
        message: response.data.message || 'Product deleted successfully',
      };
    }
    
    throw new Error(response.data?.message || 'Failed to delete product');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while deleting product';
    throw new Error(message);
  }
}


/**
 * Search products
 *
 * @param {string} searchTerm
 * @param {Object} params - query params (size, etc.)
 * @param {Object} config - axios request config (e.g. { signal })
 */
export async function searchPublicProducts(searchTerm, params = {}, config = {}) {
  try {
    const response = await apiGet(API_ENDPOINTS.PRODUCT_SEARCH_PUBLIC, {
      params: { q: searchTerm, ...params },
      ...config,
    });

    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }

    throw new Error(response.data?.message || 'Failed to search products');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while searching products';
    throw new Error(message);
  }
}

/**
 * Get variant gallery images
 * @param {string} productUuid - Product UUID (not used in API, kept for compatibility)
 * @param {string} variantUuid - Variant UUID
 */
export async function getVariantGallery(productUuid, variantUuid) {
  try {
    const response = await apiGet(`${API_ENDPOINTS.PRODUCTS}/variants/gallery/${variantUuid}`);
    
    if (response.data?.success) {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    }
    
    throw new Error(response.data?.message || 'Failed to fetch variant gallery');
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An error occurred while fetching variant gallery';
    throw new Error(message);
  }
}

