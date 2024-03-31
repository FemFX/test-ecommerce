import { IsOptional, IsString } from 'class-validator';

export class FilterDto {
  @IsString()
  @IsOptional()
  searchTerms?: string;

  @IsString()
  categoryId: string;

  @IsString()
  attributeIds: string;
}
