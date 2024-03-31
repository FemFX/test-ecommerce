"use client";
import { Dispatch, SetStateAction, useMemo } from "react";
import { groupAttributes } from "@/lib/utils";
import { Attribute } from "@/types/attribute";
import { Checkbox } from "@gravity-ui/uikit";

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
    <div>
      {Object.entries(groupedAttributes).map(([name, values]) => (
        <div key={name}>
          <div className="font-bold">{name}</div>
          {values.map(({ id, value }) => (
            <div key={id}>
              <Checkbox
                checked={attributeIds.includes(id)}
                onChange={() => handleFilterChange(id)}
              />
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
