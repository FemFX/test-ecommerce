import axios from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Product } from "@/types/product.type";

export interface QueryProductsOptions {
  categoryId: string;
  searchTerms?: string;
  attributeIds: string[];
}

export const useFilterProducts = (
  options: QueryProductsOptions,
  initialData: { products: Product[] }
) => {
  const { categoryId, searchTerms, attributeIds } = options;

  return useQuery<Product[]>({
    queryKey: ["products", categoryId, searchTerms, attributeIds],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/product/category/${categoryId}`,
        {
          params:
            attributeIds.length > 0
              ? { attributeIds: attributeIds.join(","), searchTerms }
              : { searchTerms },
        }
      );

      return data;
    },
    initialData: initialData.products,
  });
};
