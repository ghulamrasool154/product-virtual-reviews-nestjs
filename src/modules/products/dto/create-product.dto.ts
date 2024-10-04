import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  stock_status: string;

  @IsString()
  description: string;

  @IsString()
  price: string;

  @IsOptional()
  @IsObject()
  review: {
    review_average_rating: Number;
    review_total: Number;
  };
}
