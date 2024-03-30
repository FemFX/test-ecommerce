import { Product } from "./product.type";

export interface Category {
  id: CategoryId;
  name: string;
  products: Product[];
}
