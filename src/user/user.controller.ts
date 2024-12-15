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

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}
  @Post()
  createUsers(@Body() userDto: any): string {
    this.userServices.createUsers(userDto);
    return 'User created';
  }

  @Get()
  gerAllUsers(@Query() searchFilters: any): any {
    const users = this.userServices.gerAllUsers(searchFilters);
    console.log(users);
    return users;
  }

  @Get(':id')
  getUserProfile(@Param('id') id: string): any {
    const userProfile = this.userServices.getUserProfile(id);
    return userProfile;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateDto: any): string {
    this.userServices.updateUser(id, updateDto);
    return `User update: ${id}`;
  }

  @Delete('id')
  deleteUser(@Param('id') id: string): string {
    this.userServices.deleteUser(id);
    return `User deleted: ${id}`;
  }
}
