import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { REVIEW_STATUS } from './common/enum';
import { User } from './user.schema';
import { Product } from './product.schema';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
class Review {
  @Prop({
    enum: [REVIEW_STATUS],
    default: REVIEW_STATUS.APPROVED,
  })
  status: string;

  @Prop({
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  })
  reviewer: User;

  @Prop({ default: null })
  review: string;

  @Prop({ default: 0 })
  rating: number;

  @Prop({
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
  })
  product: Product;
}
const REVIEW_SCHEMA = SchemaFactory.createForClass(Review);
const REVIEW_MODEL = Review.name;
type REVIEW_TYPE = HydratedDocument<Review>;

export { REVIEW_TYPE, REVIEW_SCHEMA, REVIEW_MODEL };
