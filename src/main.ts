import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Middleware
  app.use(Logger);

  // Starting Application
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
