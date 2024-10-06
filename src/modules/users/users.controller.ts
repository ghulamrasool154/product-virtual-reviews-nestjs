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
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      success: true,
      message: "user create successfully",
      data: {
        user: user,
      },
    };
  }

  @Get()
  async findAll() {
    const user = await this.usersService.findAll();
    return {
      success: true,
      message: "find all user successfully",
      data: {
        length: user.length,
        user: user,
      },
    };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return {
      success: true,
      message: "user by id successfully",
      data: this.usersService.findOne(id),
    };
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      success: true,
      message: "user update successfully",
      data: this.usersService.update(id, updateUserDto),
    };
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return {
      success: true,
      message: "user delet successfully",
      data: this.usersService.remove(id),
    };
  }
}
