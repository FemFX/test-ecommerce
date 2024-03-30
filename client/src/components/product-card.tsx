import { Product } from "@/types/product.type";
import { Card } from "@gravity-ui/uikit";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <div className="relative w-full aspect-video rounded-md overflow-hidden h-[140px]">
        {/* <Image
          fill
          src={product.imageUrl}
          className="object-cover"
          alt={product.name}
        /> */}
      </div>
    </Card>
  );
};

export default ProductCard;
