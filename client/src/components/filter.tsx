"use client";
import { groupAttributes } from "@/lib/utils";
import { Attribute } from "@/types/attribute";
import { Checkbox } from "@gravity-ui/uikit";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface GroupedAttributes {
  [attributeName: string]: { id: string; value: string }[];
}

interface FilterProps {
  attributes: Attribute[];
  attributeIds: string[];
  setAttributeIds: Dispatch<SetStateAction<string[]>>;
}

const Filter = ({ attributes, setAttributeIds, attributeIds }: FilterProps) => {
  const [groupedAttributes, setGroupedAttributes] = useState<GroupedAttributes>(
    {}
  );
  const handleFilterChange = (id: string) => {
    setAttributeIds((prevFilters) => {
      if (prevFilters.includes(id)) {
        return prevFilters.filter((val) => val !== id);
      } else {
        return [...prevFilters, id];
      }
    });
  };
  useEffect(() => {
    setGroupedAttributes(groupAttributes(attributes));
  }, [attributes]);

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
