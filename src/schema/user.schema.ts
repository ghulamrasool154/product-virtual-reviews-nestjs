import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
})
class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}
const USER_SCHEMA = SchemaFactory.createForClass(User);
const USER_MODEL = User.name;
type USER_TYPE = HydratedDocument<User>;

export { USER_TYPE, USER_SCHEMA, USER_MODEL, User };
