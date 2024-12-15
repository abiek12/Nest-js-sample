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

@Controller('user')
export class UserController {
  @Post()
  createUsers(@Body() userDto: any): string {
    console.log(userDto);
    return 'User created';
  }

  @Get()
  gerAllUsers(@Query() searchFilters: any): string {
    console.log(searchFilters);
    return 'Hello User!';
  }

  @Get(':id')
  getUserProfile(@Param('id') id: string): string {
    return `User Profile of ${id}`;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateDto: any): string {
    console.log(`User update with id: ${id}`);
    console.log(updateDto);
    return `User update: ${id}`;
  }

  @Delete('id')
  deleteUser(@Param('id') id: string): string {
    console.log(`User with ${id} deleted`);
    return `User deleted: ${id}`;
  }
}
