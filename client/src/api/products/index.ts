import { getData } from "@/lib/utils";
import { Product } from "@/types/product.type";

export const getProducts = async () => await getData<Product[]>(`product`);
export const getProductsByCategory = async (categoryId: string) =>
  await getData<Product[]>(`product/category/${categoryId}`);
