import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { COLLECTIONS } from 'src/config/collections';

@Module({
  imports: [MongooseModule.forFeature([COLLECTIONS.product])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [MongooseModule],
})
export class ProductsModule {
  constructor() {
    console.log('Product Module.');
  }
}
