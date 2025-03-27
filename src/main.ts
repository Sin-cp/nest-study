/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // 入口
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {
    // 关闭日志
    // logger: false,
    // logger: ['error', 'warn'],
    // 允许跨域
    cors: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter(logger)); // 注册全局异常过滤器

  await app.listen(process.env.PORT ?? 3000); // 监听端口
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  // logger.log(`Application is running on: ${await app.getUrl()}`);
  // logger.warn(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
