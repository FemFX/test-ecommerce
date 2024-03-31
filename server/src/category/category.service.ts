import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    return this.prismaService.category.findMany();
  }
  async getOne(id: string) {
    return this.prismaService.category.findUnique({
      where: {
        id,
      },
    });
  }
  async create(dto: CreateCategoryDto) {
    try {
      const category = await this.prismaService.category.create({
        data: { name: dto.name },
      });

      return category;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  async update(id: string, dto: UpdateCategoryDto) {
    try {
      const category = await this.prismaService.category.update({
        where: { id },
        data: { name: dto.name },
      });

      return category;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  async delete(id: string) {
    try {
      const deletedItem = await this.prismaService.category.delete({
        where: { id },
      });
      return deletedItem;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
