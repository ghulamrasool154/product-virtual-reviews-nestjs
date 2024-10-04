import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { REVIEW_MODEL, REVIEW_TYPE } from 'src/schema/review.schema';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(REVIEW_MODEL) private reviewModel: Model<REVIEW_TYPE>,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const review = await this.reviewModel.create(createReviewDto);
    return review;
  }

  async findAll() {
    let review = await this.reviewModel.find();
    return review;
  }

  async findOne(id: string) {
    let review = await this.reviewModel.findById(id);
    return review;
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: string) {
    return `This action removes a #${id} review`;
  }
}
