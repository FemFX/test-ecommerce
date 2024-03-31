import { Attribute } from "./attribute";
import { Category } from "./category.type";

export interface Product {
  id: ProductId;
  imageId: string;
  name: string;
  category: Category;
  attributes: Attribute[];
}
