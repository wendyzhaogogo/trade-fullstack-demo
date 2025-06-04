import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用 CORS
  app.enableCors({
    origin: ['http://localhost:5173'], // Vite 默认开发服务器端口
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
