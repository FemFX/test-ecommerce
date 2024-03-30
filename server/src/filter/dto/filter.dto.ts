import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

export class FilterDto {
  @IsString()
  @IsOptional()
  searchTerms?: string;

  @IsString()
  categoryId: string;

  @IsString()
  attributeIds: string;
}
