import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAttributeDto } from 'src/attribute/dto/create-attribute.dto';

export class CreateProductDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly categoryId: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAttributeDto)
  readonly attributes: CreateAttributeDto[];
}
