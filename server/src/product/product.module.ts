import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { FilterModule } from 'src/filter/filter.module';
import { FilterService } from 'src/filter/filter.service';

@Module({
  imports: [FilterModule],
  controllers: [ProductController],
  providers: [ProductService, FilterService],
})
export class ProductModule {}
