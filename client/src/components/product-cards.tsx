import ProductCard from "./product-card";
import { Product } from "@/types/product.type";

const ProductsCards = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCards;
