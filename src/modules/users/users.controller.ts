import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return {
      message: "user create successfully",
      success: true,
      data: this.usersService.create(createUserDto),
    };
  }

  @Get()
  async findAll() {
    const user = await this.usersService.findAll();
    return {
      message: "find all user successfully",
      success: true,
      data: {
        length: user.length,
        user: user,
      },
    };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return {
      message: "user by id successfully",
      success: true,
      data: this.usersService.findOne(id),
    };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      message: "user update successfully",
      success: true,
      data: this.usersService.update(id, updateUserDto),
    };
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return {
      message: "user delet successfully",
      success: true,
      data: this.usersService.remove(id),
    };
  }
}
