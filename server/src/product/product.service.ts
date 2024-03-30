import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
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

  async getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: {
        attributes: true,
      },
    });
  }

  async getAllByCategory(categoryId: string, query) {
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
  async create(dto: CreateProductDto): Promise<Product> {
    const product = await this.prismaService.product.create({
      data: {
        name: dto.name,
        imageUrl: dto.imageUrl,
        categoryId: dto.categoryId,
        attributes: {
          connect: dto.attributeIds.map((id) => ({
            id,
          })),
        },
      },
    });
    return product;
  }
  async update(id: string, dto: UpdateProductDto) {
    const updatedProduct = await this.prismaService.product.update({
      where: { id: id },
      data: {
        name: dto.name,
        imageUrl: dto.imageUrl,
      },
    });

    return updatedProduct;
  }
  async delete(id: string) {
    const deletedItem = await this.prismaService.product.delete({
      where: { id },
    });
    return deletedItem;
  }
}