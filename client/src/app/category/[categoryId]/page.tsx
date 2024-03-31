import FilteredProducts from "@/components/filtered-products";
import { getData } from "@/lib/utils";
import { Attribute } from "@/types/attribute";
import { Product } from "@/types/product.type";

const ProductsByCategoryPage = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const products = await getData<Product[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/products/category/${params.categoryId}`
  );
  const attributes = await getData<Attribute[]>(
    `${process.env.NEXT_PUBLIC_URL}/api/attributes/${params.categoryId}`
  );

  return (
    <div>
      <FilteredProducts
        categoryId={params.categoryId}
        attributes={attributes}
        products={products}
      />
    </div>
  );
};

export default ProductsByCategoryPage;
