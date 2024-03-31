import { getData } from "@/lib/utils";
import { Category } from "@/types/category.type";

export const getCategories = async () =>
  await getData<Category[]>(`categories`);
