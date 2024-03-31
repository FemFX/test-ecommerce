import ProductsCards from "@/components/product-cards";
import CategoryList from "@/components/category-list";
import { Category } from "@/types/category.type";
import { getData } from "@/lib/utils";
import { getProducts } from "../api/products";
import { getCategories } from "../api/categories";

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div>
      <CategoryList categories={categories} />
      <ProductsCards products={products} />
    </div>
  );
}
