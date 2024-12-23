import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFilterDto } from './dto/filter-user.dto';
import { UserPipe } from './validation/validation.pipe';
import { CreateUserSchema } from './types/user.type';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}

  @Post()
  @UsePipes(new UserPipe(CreateUserSchema))
  async createUsers(@Body() userData: CreateUserDto): Promise<string> {
    this.userServices.createUsers(userData);
    return 'User created';
  }

  @Get()
  getAllUsers(@Query() searchFilters: UserFilterDto): any {
    const users = this.userServices.getAllUsers(searchFilters);
    if (!users) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    console.log(users);
    return users;
  }

  @Get(':id')
  getUserProfile(@Param('id', ParseIntPipe) id: number): any {
    const userProfile = this.userServices.getUserProfile(id);
    return userProfile;
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() userData: CreateUserDto,
  ): string {
    this.userServices.updateUser(id, userData);
    return `User update: ${id}`;
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): string {
    this.userServices.deleteUser(id);
    return `User deleted: ${id}`;
  }
}
