import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly imageId: string;
  @IsString()
  readonly categoryId: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => String)
  readonly attributeIds: string[];
}
