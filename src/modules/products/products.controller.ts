import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Response } from "express";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const data = await this.productsService.create(createProductDto);
    return {
      success: true,
      message: "create product successfully",
      data: {
        product: data,
      },
    };
  }

  @Get()
  async findAll() {
    const data = await this.productsService.findAll();
    return {
      success: true,
      message: "get products successfully",
      data: {
        length: data.length,
        product: data,
      },
    };
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    let data = await this.productsService.findOne(id);
    return {
      success: true,
      message: "get product successfully",
      data: {
        product: data,
      },
    };
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Res() res: Response
  ) {
    let product = await this.productsService.update(id, updateProductDto);
    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
        data: { product: null },
      });
    }
    return res.status(HttpStatus.ACCEPTED).json({
      success: true,
      message: "Product update successfully",
      data: { product: product },
    });
  }

  @Delete(":id")
  async remove(@Param("id") id: string, @Res() res: Response) {
    let product = await this.productsService.remove(id);

    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,

        message: "Product not found",
        data: { product: null },
      });
    }
    return res.status(HttpStatus.ACCEPTED).json({
      success: true,

      message: "Product delete successfully",
      data: { product: null },
    });
  }
}
