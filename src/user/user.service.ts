import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUsers(userDetails: any) {
    try {
      console.log('create user');
      console.log(userDetails);
      return userDetails;
    } catch (error) {
      throw error;
    }
  }

  gerAllUsers(searchFilters: any) {
    try {
      console.log('get all users');
      console.log(searchFilters);
      const user = [];
      user.push({
        id: 1,
        name: 'abhi',
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  getUserProfile(userId: string) {
    try {
      console.log('get user profile');
      const user = {
        id: userId,
        name: 'abhi',
      };
      return user;
    } catch (error) {
      throw error;
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
      throw error;
    }
  }

  deleteUser(userId: string) {
    try {
      console.log('Delete user');
      console.log(userId);
    } catch (error) {
      throw error;
    }
  }
}
