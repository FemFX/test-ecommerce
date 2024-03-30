import ProductCard from "@/components/product-card";
import { Product } from "@/types/product.type";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
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
  console.log("products", products);

  return (
    <div className="grid grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
