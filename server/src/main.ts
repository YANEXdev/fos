import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  await app.listen(5000).then(() => console.log(`server started on ${'http://192.168.1.67'}:${5000}`));
}
bootstrap();
