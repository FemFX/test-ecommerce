import Filter from "@/components/filter";
import ProductsCards from "@/components/product-cards";
import { Input } from "@/components/ui/input";
import { Attribute } from "@/types/attribute";
import { Product } from "@/types/product.type";

async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const res = await fetch(
    `http://localhost:3000/api/products/category/${categoryId}`,
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
    `http://localhost:3000/api/attributes/${categoryId}`,
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
      <div className="mb-3">
        <Input placeholder="search" />
      </div>

      <div className="grid grid-cols-4">
        <div>
          <Filter attributes={attributes} />
        </div>
        <div className="col-span-3">
          <ProductsCards products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsByCategoryPage;
