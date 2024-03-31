import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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
      try {
        const params =
          attributeIds.length > 0
            ? { attributeIds: attributeIds.join(","), searchTerms }
            : { searchTerms };

        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}product/category/${categoryId}`,
          {
            params,
          }
        );

        return data;
      } catch (err) {
        throw new Error("Failed to fetch products");
      }
    },
    initialData: initialData.products,
  });
};
