import { Attribute } from "./attribute";
import { Category } from "./category.type";

export interface Product {
  id: ProductId;
  name: string;
  category: Category;
  attributes: Attribute[];
}
