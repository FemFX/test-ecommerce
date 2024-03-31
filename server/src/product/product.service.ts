import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductWithAttributes } from 'src/types';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterService } from 'src/filter/filter.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly filterService: FilterService,
  ) {}

  async getAll() {
    return this.prismaService.product.findMany({
      include: {
        attributes: true,
      },
    });
  }

  async getAllByCategory(
    categoryId: string,
    query: { searchTerms?: string; attributeIds: string },
  ) {
    const filter = this.filterService.filterProducts({ ...query, categoryId });

    return this.prismaService.product.findMany(filter);
  }
  async getOne(id: string): Promise<ProductWithAttributes> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: {
        attributes: true,
      },
    });
  }
  async create(dto: CreateProductDto) {
    try {
      const product = await this.prismaService.product.create({
        data: {
          name: dto.name,
          imageId: dto.imageId,
          categoryId: dto.categoryId,
          attributes: {
            connect: dto.attributeIds.map((id) => ({
              id,
            })),
          },
        },
      });
      return product;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  async update(id: string, dto: UpdateProductDto) {
    try {
      const updatedProduct = await this.prismaService.product.update({
        where: { id: id },
        data: {
          name: dto.name,
          imageId: dto.imageId,
        },
      });

      return updatedProduct;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  async delete(id: string) {
    try {
      const deletedItem = await this.prismaService.product.delete({
        where: { id },
      });
      return deletedItem;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
