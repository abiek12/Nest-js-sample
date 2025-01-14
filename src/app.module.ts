import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthMiddleware } from './auth/middlewares/auth.middleware';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from './common/datasource/typeorm.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronTasksService } from './utils/cron-tasks.service';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, TypeormModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    CronTasksService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes("*");
  }
}
