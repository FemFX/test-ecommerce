import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductWithAttributes } from 'src/types';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async getAllByCategory(
    categoryName: string,
  ): Promise<ProductWithAttributes[]> {
    return this.prismaService.product.findMany({
      where: {
        category: {
          name: categoryName,
        },
      },
      include: {
        attributes: true,
      },
    });
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
        categoryId: dto.categoryId,
        attributes: {
          connectOrCreate: dto.attributes.map((attribute) => ({
            where: {
              name_value: {
                name: attribute.name,
                value: attribute.value,
              },
            },
            create: attribute,
          })),
        },
      },
    });
    return product;
  }
  async update() {}
  async delete() {}
}
