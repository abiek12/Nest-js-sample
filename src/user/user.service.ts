import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly userRepository = this.datassource.getRepository(User);
  private readonly userQueryBuilder = this.userRepository.createQueryBuilder('user');
  private logger = new Logger(UserService.name);
  constructor(private datassource: DataSource) {}

  createUsers = async (userDetails: CreateUserDto): Promise<User> => {
    try {
      if (!userDetails.name || !userDetails.phone || !userDetails.password) {
        const missingFields = (['name', 'phone', 'password'] as (keyof CreateUserDto)[]).filter(field => !userDetails[field]);
        const errorMessage = `Missing fields: ${missingFields.join(', ')}`;
        this.logger.error(errorMessage);
        throw new BadRequestException(errorMessage);
      }

      const existingUser = await this.userQueryBuilder
        .where('user.phone = :phone', { phone: userDetails.phone })
        .getOne();

      if (existingUser) {
        this.logger.error('User with the same phone number already exist!');
        throw new BadRequestException(
          'User with the same phone number already exist!',
        );
      }

      const newUserEntity = new User();
      newUserEntity.name = userDetails.name;
      newUserEntity.gender = userDetails.gender;
      newUserEntity.password = userDetails.password;
      newUserEntity.phone = userDetails.phone;

      this.logger.log("`User created successfully");
      return await this.userRepository.save(newUserEntity);
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  };

  getAllUsers(searchFilters: any): IUser[] {
    try {
      console.log('get all users service');
      if (searchFilters) console.log(searchFilters);
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

  updateUser(userId: number, updateData: any) {
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
