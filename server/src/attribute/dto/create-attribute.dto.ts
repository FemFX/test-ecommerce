import { IsString } from 'class-validator';

export class CreateAttributeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly value: string;
}
