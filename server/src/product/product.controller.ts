import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.productService.getOne(id);
  }

  @Get(':category')
  async getAllByCategory(@Param('category') category: string) {
    return this.productService.getAllByCategory(category);
  }

  @Post()
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }
}
