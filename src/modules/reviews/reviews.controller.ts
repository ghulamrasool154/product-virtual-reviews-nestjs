import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { Response } from "express";

@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    let review = await this.reviewsService.create(createReviewDto);
    return {
      success: true,
      message: "Review add successfully",
      data: {
        review: review,
      },
    };
  }

  @Get()
  async findAll() {
    let review = await this.reviewsService.findAll();
    return {
      success: true,
      message: "Review find all successfully",
      data: {
        length: review.length,
        review: review,
      },
    };
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    let review = await this.reviewsService.findOne(id);
    return {
      success: true,
      message: "Review find successfully",
      data: {
        review: review,
      },
    };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string, @Res() res: Response) {
    let review = await this.reviewsService.remove(id);

    if (!review) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: "review not found",
        data: { review: null },
      });
    }
    return res.status(HttpStatus.ACCEPTED).json({
      success: true,
      message: "review delete successfully",
      data: { review: null },
    });
  }
}
