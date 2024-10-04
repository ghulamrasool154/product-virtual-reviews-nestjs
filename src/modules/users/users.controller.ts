import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return {
      data: this.usersService.create(createUserDto),
    };
  }

  @Get()
  findAll() {
    return {
      data: this.usersService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      data: this.usersService.findOne(id),
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: this.usersService.update(id, updateUserDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      data: this.usersService.remove(id),
    };
  }
}
