import { apiGet } from "../api/apiManager";
import { API_ENDPOINTS } from "../lib/constants";

export const productsService = {
    //Get All products
    getAllProducts: async () => {
         try {
              const response = await apiGet(API_ENDPOINTS.GET_ALL_PRODUCTS);
              
              if (response.data?.success) {
                return {
                  success: true,
                  products: response.data.data.content || [],
                  pagination: {
                    pageNumber: response.data.data.pageNumber,
                    pageSize: response.data.data.pageSize,
                    totalElements: response.data.data.totalElements,
                    totalPages: response.data.data.totalPages,
                    last: response.data.data.last,
                    first: response.data.data.first,
                  },
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
}