import { NestFactory } from '@nestjs/core';
import { CONFIG } from 'config';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  _setupSwagger(app);
  _setupSwagger(app);

  await app.listen(CONFIG.PORT);
}

async function _setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('ZUJ_TEST')
    .setDescription('Zuj_coding_test')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'ZUJ_TEST',
  });
}

bootstrap();
