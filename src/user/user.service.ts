import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private userRepository;
  private userQueryBuilder;
  private logger = new Logger();
  constructor ( private datassource: DataSource) {
    this.userRepository = this.datassource.getRepository(User);
    this.userQueryBuilder = this.userRepository.createQueryBuilder("user");
  }

  createUsers = async (userDetails: CreateUserDto): Promise<any>  => {
    try {
      if(!userDetails.name) {
        this.logger.error("User name is missing!");
        throw new BadRequestException(400, 'User name is missing!')
      }
      
      if(!userDetails.phone) {
        this.logger.error("User's phone is missing!");
        throw new BadRequestException(400, "User's phone is missing!");
      }

      if(!userDetails.password) {
        this.logger.error("User password is missing!");
        throw new BadRequestException(400, 'User password is missing!')
      }

      const newUserEntity = new User();
      newUserEntity.name = userDetails.name;
      newUserEntity.gender = userDetails.gender;
      newUserEntity.password = userDetails.password;
      newUserEntity.phone = userDetails.password;

      return await this.userRepository.save(newUserEntity);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

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
