import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    let review = await this.reviewsService.create(createReviewDto);
    return {
      success: true,
      message: 'Review add successfully',
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
      message: 'Review find all successfully',
      data: {
        length: review.length,
        review: review,
      },
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let review = await this.reviewsService.findOne(id);
    return {
      success: true,
      message: 'Review find successfully',
      data: {
        review: review,
      },
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
