import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttributeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllByCategories(categoryId: string) {
    return this.prismaService.attribute.findMany({
      where: {
        categories: { some: { id: categoryId } },
      },
    });
  }
}
