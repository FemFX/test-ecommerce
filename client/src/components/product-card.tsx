import Image from "next/image";
import { Product } from "@/types/product.type";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="shadow block">
      <div className="relative w-full aspect-video rounded-md overflow-hidden h-[140px]">
        <Image
          fill
          src={product.imageId}
          className="object-cover"
          alt={product.name}
        />
      </div>
      <div>{product.name}</div>
      <div>
        {product.attributes.map((attr) => (
          <div key={attr.id} className="flex">
            <div className="font-bold">{attr.name}</div>:{attr.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
