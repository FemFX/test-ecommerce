import { getAttributesByCategory } from "@/api/attributes";
import { getProductsByCategory } from "@/api/products";
import FilteredProducts from "@/components/filtered-products";

const ProductsByCategoryPage = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const products = await getProductsByCategory(params.categoryId);
  const attributes = await getAttributesByCategory(params.categoryId);

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
