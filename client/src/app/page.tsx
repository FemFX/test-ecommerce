import ProductsCards from "@/components/product-cards";
import { Product } from "@/types/product.type";
import CategoryList from "@/components/category-list";
import { Category } from "@/types/category.type";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categories`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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
