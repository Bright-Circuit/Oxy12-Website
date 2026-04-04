'use client';

import { useQuery } from '@tanstack/react-query';
import { filterShopProducts } from '../services/shop.service';

const QUERY_KEYS = {
  SHOP_PRODUCTS: 'shopProducts',
};

/**
 * Custom hook for shop products with filtering
 * @param {Object} filters - Filter criteria
 * @param {string} filters.categoryUuid - Category UUID (optional)
 * @param {number} filters.minPrice - Minimum price (optional)
 * @param {number} filters.maxPrice - Maximum price (optional)
 * @param {Array<string>} filters.attributeValueUuids - Attribute value UUIDs (optional)
 * @param {boolean} filters.inStockOnly - Filter in-stock products only (optional)
 * @param {number} filters.page - Page number (zero-based)
 * @param {number} filters.size - Items per page
 * @param {string} filters.sortBy - Sort field
 * @param {string} filters.sortDirection - Sort direction
 */
export function useShop(filters = {}) {
  // Build query key with filter parameters for proper caching
  const queryKey = [
    QUERY_KEYS.SHOP_PRODUCTS,
    filters.categoryUuid,
    filters.minPrice,
    filters.maxPrice,
    filters.attributeValueUuids?.join(','),
    filters.inStockOnly,
    filters.page,
    filters.size,
    filters.sortBy,
    filters.sortDirection,
  ];

  const {
    data: productsData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: () => filterShopProducts(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
    // Don't refetch on window focus for shop products
    refetchOnWindowFocus: false,
  });

  // Extract from new nested structure: data.products.content
  const products = productsData?.data?.products?.content || [];
  const pageNumber = productsData?.data?.products?.pageNumber ?? 0;
  const pageSize = productsData?.data?.products?.pageSize ?? 0;
  const totalElements = productsData?.data?.products?.totalElements ?? 0;
  const totalPages = productsData?.data?.products?.totalPages ?? 0;

  // Extract filter metadata
  const filterMetadata = productsData?.data?.filterMetadata || null;
  const categories = filterMetadata?.categories || [];
  const attributes = filterMetadata?.attributes || [];
  const priceRange = filterMetadata?.priceRange || { minPrice: 0, maxPrice: 10000 };

  return {
    products,
    pageNumber,
    pageSize,
    totalElements,
    totalPages,
    filterMetadata,
    categories,
    attributes,
    priceRange,
    isLoading,
    isError,
    error,
    refetch,
  };
}
