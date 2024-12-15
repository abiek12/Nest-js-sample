import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFilterDto } from './dto/filter-user.dto';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}

  @Post()
  createUsers(@Body() userData: CreateUserDto): string {
    this.userServices.createUsers(userData);
    return 'User created';
  }

  @Get()
  gerAllUsers(@Query() searchFilters: UserFilterDto): any {
    const users = this.userServices.getAllUsers(searchFilters);
    console.log(users);
    return users;
  }

  @Get(':id')
  getUserProfile(@Param('id') id: number): any {
    const userProfile = this.userServices.getUserProfile(id);
    return userProfile;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userData: CreateUserDto): string {
    this.userServices.updateUser(id, userData);
    return `User update: ${id}`;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): string {
    this.userServices.deleteUser(id);
    return `User deleted: ${id}`;
  }
}
