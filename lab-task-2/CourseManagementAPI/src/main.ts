import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,             // strips fields not in the DTO
      forbidNonWhitelisted: true,  // errors
      transform: true,             // converts types
    }),
  );
  await app.listen(3000);
}
bootstrap();