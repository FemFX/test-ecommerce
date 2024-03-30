import { Attribute, Product } from '@prisma/client';

export type ProductWithAttributes = Product & { attributes: Attribute[] };
