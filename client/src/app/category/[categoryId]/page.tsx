import FilteredProducts from "@/components/filtered-products";
import { Attribute } from "@/types/attribute";
import { Product } from "@/types/product.type";

async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/category/${categoryId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getAttributesByCategory(
  categoryId: string
): Promise<Attribute[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/attributes/${categoryId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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
