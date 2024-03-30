"use client";

import { Attribute } from "@/types/attribute";
import Filter from "./filter";
import ProductsCards from "./product-cards";
import { Input } from "./ui/input";
import { Product } from "@/types/product.type";
import { useState } from "react";
import { useQueryState } from "nuqs";
import { useFilterProducts } from "@/hooks/use-filter-products";
import { useDebounce } from "use-debounce";

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
  const { data } = useFilterProducts(
    { attributeIds, categoryId, searchTerms: debouncedSearchTerms || "" },
    { products }
  );

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
          <ProductsCards products={data ?? []} />
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
