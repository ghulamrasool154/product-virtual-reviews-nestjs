import { Module } from '@nestjs/common';
import { MODULE_LIST } from './modules';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ...MODULE_LIST,
    MongooseModule.forRoot('mongodb://localhost/nest-gr'),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log('App Module.');
  }
}
