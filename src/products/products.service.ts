import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product, ProductSchema } from './product.schema';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class ProductsService {
  // Method 01
  // constructor(@InjectConnection() private connection: Connection) {}

  // async getTenantConnection(tenantId: string) {
  //   return this.connection.useDb(`tenant_${tenantId}`);
  // }

  // async getProducts(tenantId: string) {
  //   const tenantConnection = await this.getTenantConnection(tenantId);
  //   const productModel = await tenantConnection.model(
  //     Product.name,
  //     ProductSchema,
  //   );
  //   return productModel.find();
  // }
  // Method 01 Ends Here

  // Method 02
  constructor(@Inject('PRODUCT_MODEL') private ProductModel: Model<Product>) {}
  async getProducts() {
    return this.ProductModel.find();
  }
  // Method 02 Ends Here
}
