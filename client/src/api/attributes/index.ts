import { getData } from "@/lib/utils";
import { Attribute } from "@/types/attribute";

export const getAttributesByCategory = async (categoryId: string) =>
  await getData<Attribute[]>(`attributes/${categoryId}`);
