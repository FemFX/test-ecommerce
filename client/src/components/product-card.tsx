import Image from "next/image";
import { Product } from "@/types/product.type";
import { Button } from "./ui/button";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="shadow block p-2 rounded space-y-2">
      <div className="relative w-full aspect-video rounded-md overflow-hidden h-[140px]">
        <Image
          fill
          src={product.imageId}
          className="object-cover"
          alt={product.name}
        />
      </div>
      <div className="text-xl">{product.name}</div>
      <div>
        {product.attributes.map((attr) => (
          <div key={attr.id} className="flex gap-y-2">
            <div className="font-bold">{attr.name}</div>:{attr.value}
          </div>
        ))}
      </div>
      <Button>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
