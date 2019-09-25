import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(3000);
}

bootstrap();
