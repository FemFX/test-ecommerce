import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}
  @Get()
  async getAll() {
    return this.attributeService.getAll();
  }
  @Get(':categoryId')
  async getAllByCategories(@Param('categoryId') categoryId: string) {
    return this.attributeService.getAllByCategories(categoryId);
  }
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.attributeService.getOne(id);
  }
  @Post()
  async create(@Body() dto: CreateAttributeDto) {
    return this.attributeService.create(dto);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateAttributeDto) {
    return this.attributeService.update(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.attributeService.delete(id);
  }
}
