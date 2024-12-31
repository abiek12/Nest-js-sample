import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from 'src/auth/guards/auth.guard';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
