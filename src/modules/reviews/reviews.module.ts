import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { COLLECTIONS } from 'src/config/collections';

@Module({
  imports: [MongooseModule.forFeature([COLLECTIONS.review])],

  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [MongooseModule],
})
export class ReviewsModule {
  constructor() {
    console.log('Review Module.');
  }
}
