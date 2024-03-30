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
    const attributeIdsArray =
      typeof attributeIds === 'string' ? attributeIds.split(',') : [];
    return {
      where: {
        categoryId,
        ...(searchTerms && {
          name: {
            contains: searchTerms,
            mode: 'insensitive',
          },
        }),
        ...(attributeIdsArray.length > 0 && {
          attributes: {
            some: {
              id: {
                in: attributeIdsArray,
              },
            },
          },
        }),
      },
      include: {
        attributes: true,
      },
    };
  }
}
