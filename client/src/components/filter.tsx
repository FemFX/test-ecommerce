"use client";
import { Dispatch, SetStateAction, useMemo } from "react";
import { groupAttributes } from "@/lib/utils";
import { Attribute } from "@/types/attribute";
import AttributeGroup from "./attribute-group";

export interface GroupedAttributes {
  [attributeName: string]: { id: string; value: string }[];
}

interface FilterProps {
  attributes: Attribute[];
  attributeIds: string[];
  setAttributeIds: Dispatch<SetStateAction<string[]>>;
}

const Filter = ({ attributes, setAttributeIds, attributeIds }: FilterProps) => {
  const groupedAttributes = useMemo(
    () => groupAttributes(attributes),
    [attributes]
  );

  const handleFilterChange = (id: string) => {
    setAttributeIds((prevFilters) => {
      const newFilterIds = prevFilters.includes(id)
        ? prevFilters.filter((val) => val !== id)
        : [...prevFilters, id];
      return newFilterIds;
    });
  };

  return (
    <div className="p-2 text-lg">
      {Object.entries(groupedAttributes).map(([name, values]) => (
        <AttributeGroup
          key={name}
          name={name}
          values={values}
          attributeIds={attributeIds}
          handleFilterChange={handleFilterChange}
        />
      ))}
    </div>
  );
};

export default Filter;
