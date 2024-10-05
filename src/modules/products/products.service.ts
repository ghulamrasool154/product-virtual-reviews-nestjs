import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PRODUCT_MODEL, PRODUCT_TYPE } from "src/schema/product.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(PRODUCT_MODEL) private productModel: Model<PRODUCT_TYPE>
  ) {}
  async create(createProductDto: CreateProductDto) {
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  async findAll() {
    const product = await this.productModel.find();
    return product;
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id);
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    let product = await this.productModel.findByIdAndUpdate(
      id,
      { ...updateProductDto },
      { new: true }
    );
    if (!product) {
      return null;
    }
    return product;
  }

  async remove(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);
    return product;
  }
}
