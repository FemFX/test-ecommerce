import { GroupedAttributes } from "@/components/filter";
import { Attribute } from "@/types/attribute";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const groupAttributes = (attrs: Attribute[]) => {
  const grouped: GroupedAttributes = {};

  attrs.forEach((attribute) => {
    const { id, name, value } = attribute;

    if (!grouped[name]) {
      grouped[name] = [{ id, value }];
    } else {
      grouped[name].push({ id, value });
    }
  });

  return grouped;
};
