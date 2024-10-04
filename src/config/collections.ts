import { PRODUCT_MODEL, PRODUCT_SCHEMA } from 'src/schema/product.schema';
import { REVIEW_MODEL, REVIEW_SCHEMA } from 'src/schema/review.schema';
import { USER_MODEL, USER_SCHEMA } from 'src/schema/user.schema';

export const COLLECTIONS = {
  user: { name: USER_MODEL, schema: USER_SCHEMA },
  product: { name: PRODUCT_MODEL, schema: PRODUCT_SCHEMA },
  review: { name: REVIEW_MODEL, schema: REVIEW_SCHEMA },
};
