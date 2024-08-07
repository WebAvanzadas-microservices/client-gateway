// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsUUID()
  @IsString()
  id: string;
}
