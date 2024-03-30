"use client";

import axios from "axios";
import { Attribute } from "@/types/attribute";
import Filter from "./filter";
import ProductsCards from "./product-cards";
import { Input } from "./ui/input";
import { Product } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useQueryState } from "nuqs";

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
  const [attributeIds, setAttributeIds] = useState<string[]>([]);
  const { data } = useQuery<Product[]>({
    queryKey: ["products", categoryId, searchTerms, ...attributeIds],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/product/category/${categoryId}?searchTerms=${searchTerms}`,
        {
          params:
            attributeIds.length > 0
              ? { attributeIds: attributeIds.join(",") }
              : {},
        }
      );

      return data;
    },
    initialData: products,
  });
  console.log(attributeIds);

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
