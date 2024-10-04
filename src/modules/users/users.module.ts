import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { COLLECTIONS } from 'src/config/collections';

@Module({
  imports: [MongooseModule.forFeature([COLLECTIONS.user])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [MongooseModule],
})
export class UsersModule {
  constructor() {
    console.log('User Module.');
  }
}
