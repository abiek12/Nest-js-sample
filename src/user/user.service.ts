import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUsers(userDetails: any) {
    console.log('create users');
    console.log(userDetails);
    return userDetails;
  }

  gerAllUsers(searchFilters: any) {
    console.log('get all users');
    console.log(searchFilters);
    const user = [];
    user.push({
      id: 1,
      name: 'abhi',
    });
    return user;
  }

  getUserProfile(userId: string) {
    console.log('get user profile');
    const user = {
      id: userId,
      name: 'abhi',
    };
    return user;
  }

  updateUser(userId: string, updateData: any) {
    console.log('user update');
    console.log({
      userId,
      updateData,
    });
  }

  deleteUser(userId: string) {
    console.log('Delete user');
    console.log(userId);
  }
}
