import { Controller, Get, Param } from '@nestjs/common';
import { AttributeService } from './attribute.service';

@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}
  @Get(':categoryId')
  async getAllByCategories(@Param('categoryId') categoryId: string) {
    return this.attributeService.getAllByCategories(categoryId);
  }
}
