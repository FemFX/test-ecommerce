import { Attribute } from "@/types/attribute";
import { Checkbox } from "@gravity-ui/uikit";

import React from "react";

const Filter = ({ attributes }: { attributes: Attribute[] }) => {
  const transformedData: any = {};
  attributes?.forEach((item) => {
    const { id, name, value } = item;
    if (!transformedData[name]) {
      transformedData[name] = [{ id, value }];
    } else {
      transformedData[name].push({ id, value });
    }
  });

  console.log(Object.keys(transformedData));
  return <div>{Object.keys(transformedData).map((filter) => filter)}</div>;
};

export default Filter;
