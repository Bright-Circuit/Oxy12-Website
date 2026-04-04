import { useQuery } from "@tanstack/react-query"
import { productsService } from "../services/products.service";

export const useProducts = () => {
  //Get all products
  const getAllProductsQuery = useQuery({
    queryKey: ["all_products"],
    queryFn: productsService.getAllProducts,
  });


  return {
    //Quiries
    getAllProducts: getAllProductsQuery.data,
    isLoadingProducts: getAllProductsQuery.isLoading,
    productsError: getAllProductsQuery.error,
    refetchProducts: getAllProductsQuery.refetch,
  };
}