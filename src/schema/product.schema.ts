import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType, SchemaTypes } from 'mongoose';
import { STOCK_STATUS } from './common/enum';

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
class Product {
  @Prop({ required: true })
  name: string;

  @Prop({
    enum: [STOCK_STATUS],
    default: STOCK_STATUS.IN_STOCK,
  })
  stock_status: string;

  @Prop({ default: null })
  description: string;

  @Prop({ default: null })
  price: string;

  @Prop(
    raw({
      review_average_rating: {
        type: SchemaTypes.Number,
        default: 0,
      },
      review_total: {
        type: SchemaTypes.Number,
        default: 0,
      },
    }),
  )
  review: {
    review_average_rating: Number;
    review_total: Number;
  };
}
const PRODUCT_SCHEMA = SchemaFactory.createForClass(Product);
const PRODUCT_MODEL = Product.name;
type PRODUCT_TYPE = HydratedDocument<Product>;

export { PRODUCT_TYPE, PRODUCT_SCHEMA, PRODUCT_MODEL, Product };
