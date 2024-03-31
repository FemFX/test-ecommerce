"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";
import { Loader2 } from "lucide-react";
import { useDebounce } from "use-debounce";
import { Attribute } from "@/types/attribute";
import Filter from "./filter";
import ProductsCards from "./product-cards";
import { Input } from "./ui/input";
import { Product } from "@/types/product.type";
import { useFilterProducts } from "@/hooks/use-filter-products";

interface FilteredProductsProps {
  attributes: Attribute[];
  products: Product[];
  categoryId: string;
}

const FilteredProducts = ({
  attributes,
  products,
  categoryId,
}: FilteredProductsProps) => {
  const [searchTerms, setSearchTerms] = useQueryState("searchTerms");
  const [debouncedSearchTerms] = useDebounce(searchTerms, 300);
  const [attributeIds, setAttributeIds] = useState<string[]>([]);
  const { data, error, isLoading } = useFilterProducts(
    { attributeIds, categoryId, searchTerms: debouncedSearchTerms || "" },
    { products }
  );
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }
  return (
    <div>
      <div className="mb-3">
        <Input
          value={searchTerms || ""}
          onChange={(e) => setSearchTerms(e.target.value)}
          placeholder="search"
        />
      </div>

      <div className="grid grid-cols-4">
        <div>
          <Filter
            attributes={attributes}
            attributeIds={attributeIds}
            setAttributeIds={setAttributeIds}
          />
        </div>
        <div className="col-span-3">
          {data.length > 0 ? (
            <ProductsCards products={data} />
          ) : (
            <p>Products not found...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
