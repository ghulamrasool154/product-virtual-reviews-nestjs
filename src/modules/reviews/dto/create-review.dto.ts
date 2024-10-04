import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateReviewDto {
  @IsOptional()
  status: string;

  @IsNotEmpty()
  reviewer: string;

  @IsNotEmpty()
  review: string;

  @IsNotEmpty()
  rating: number;

  @IsNotEmpty()
  product: string;
}
