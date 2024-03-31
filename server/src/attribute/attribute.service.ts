import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Injectable()
export class AttributeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll() {
    return this.prismaService.attribute.findMany();
  }
  async getAllByCategories(attributeId: string) {
    return this.prismaService.attribute.findMany({
      where: {
        categories: { some: { id: attributeId } },
      },
    });
  }
  async getOne(id: string) {
    return this.prismaService.attribute.findUnique({
      where: {
        id,
      },
    });
  }
  async create(dto: CreateAttributeDto) {
    try {
      const attribute = await this.prismaService.attribute.create({
        data: { name: dto.name, value: dto.value },
      });

      return attribute;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  async update(id: string, dto: UpdateAttributeDto) {
    try {
      const attribute = await this.prismaService.attribute.update({
        where: { id },
        data: dto,
      });

      return attribute;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  async delete(id: string) {
    try {
      const deletedItem = await this.prismaService.attribute.delete({
        where: { id },
      });
      return deletedItem;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
