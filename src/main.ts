import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const appUrl = await app.getUrl();
  console.log(`Application is running on: ${appUrl}`);
}
bootstrap();
