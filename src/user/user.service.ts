import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  createUsers(userDetails: any): IUser {
    try {
      console.log('create user handler');
      console.log(userDetails);
      return userDetails;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  getAllUsers(searchFilters: any): IUser[] {
    try {
      console.log('get all users');
      console.log(searchFilters);
      const user = [];
      user.push({
        id: 1,
        name: 'abhi',
        password: 'pass@123',
        phone: '9207363637',
        gender: 'Male',
      });
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  getUserProfile(userId: number): IUser {
    try {
      console.log('get user profile');
      const user = {
        id: userId,
        name: 'abhi',
        password: 'pass@123',
        phone: '9207363637',
        gender: 'Male',
      };
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  updateUser(userId: string, updateData: any) {
    try {
      console.log('user update');
      console.log({
        userId,
        updateData,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  deleteUser(userId: number) {
    try {
      console.log('Delete user');
      console.log(userId);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
