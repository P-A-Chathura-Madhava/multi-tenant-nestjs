import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Connection } from 'mongoose';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Method 01
  // @Get()
  // getProducts(@Req() {tenantId}) {
  //   return this.productsService.getProducts(tenantId);
  // }
  // Method 01 Ends here

  // Method 02
  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
  // Method 02 Ends Here
}
