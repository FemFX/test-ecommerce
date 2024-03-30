import { Injectable } from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class FilterService {
  filterProducts({
    attributeIds,
    categoryId,
    searchTerms,
  }: FilterDto): Prisma.ProductFindManyArgs {
    return {
      where: {
        categoryId,
        ...(searchTerms && {
          name: {
            contains: searchTerms,
            mode: 'insensitive',
          },
        }),
        attributes: {
          some: {
            id: {
              in: attributeIds,
            },
          },
        },
      },
      include: {
        attributes: true,
      },
    };
  }
}
