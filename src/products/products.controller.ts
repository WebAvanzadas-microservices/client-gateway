import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return this.productsClient.emit({ cmd: 'create_product' }, {});
  }

  @Get()
  findAllProducts() {
    return this.productsClient.send({ cmd: 'find_all' }, {});
  }

  @Get(':term')
  findProduct(@Param('term') term: string) {
    return 'Regresa el producto ' + term;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Esta funcion elimina el producto ' + id;
  }

  @Patch(':id')
  patchProduct(@Param('id') id: string, @Body() body: any) {
    return 'Esta funcion actualiza el producto ' + id;
  }
}
