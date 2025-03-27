import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import * as joi from 'joi';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configEnum } from './enum/config.enum';
import { User } from './user/user.entity';
import { Profile } from './user/profile.entity';
import { Logs } from './log/logs.entity';
import { Roles } from './role/roles.entity';
import { LogsModule } from './log/logs.module';

const envFilePath =
  process.env.NODE_ENV === 'development'
    ? '.env.development'
    : '.env.production';

@Module({
  imports: [
    UserModule,
    LogsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })],
      validationSchema: joi.object({
        DB_PORT: joi.number().default(3308),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get(configEnum.DB_TYPE),
          host: configService.get(configEnum.DB_HOST),
          port: configService.get(configEnum.DB_PORT),
          username: configService.get(configEnum.DB_USERNAME),
          password: configService.get(configEnum.DB_PASSWORD),
          database: configService.get(configEnum.DB_DATABASE),
          entities: [User, Profile, Logs, Roles],
          synchronize: true,
          // logging: process.env.NODE_ENV === 'development',
          logging: false,
        }) as TypeOrmModuleOptions,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
