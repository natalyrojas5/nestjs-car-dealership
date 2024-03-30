import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // Valida que se cumpla los DTos en toda la app
    new ValidationPipe({
      whitelist: true, // Remueve los  datos que no se esperan
      forbidNonWhitelisted: true, // Mensaje de error de los campos no esperados
    }),
  );
  await app.listen(3000);
}
main();
