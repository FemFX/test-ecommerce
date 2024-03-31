import ProductsCards from "@/components/product-cards";
import { Product } from "@/types/product.type";
import CategoryList from "@/components/category-list";
import { Category } from "@/types/category.type";
import { getData } from "@/lib/utils";

export default async function Home() {
  const products = await getData<Product[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/products`
  );
  const categories = await getData<Category[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/categories`
  );

  return (
    <div>
      <CategoryList categories={categories} />
      <ProductsCards products={products} />
    </div>
  );
}
