import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AuthzModule } from './auth/authz.module';
import authZConfig from './config/authZ.config';
import databaseConfig from './config/database.config';
import { connectionFactory } from './db/db.provider';
import { UserModule } from './users/user.module';
import { validate } from './validation/env.validation';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig, authZConfig],
      validate,
      expandVariables: true,
      isGlobal: true,
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        pinoHttp: {
          name: 'Geochem',
          useLevelLabels: true,
          transport: {
            targets: [
              {
                target: 'pino/file',
                level: 'debug',
                options: {
                  destination: `${config.get('LOG_DIR')}/info.log`,
                  append: false,
                },
              },
              {
                target: 'pino/file',
                level: 'error',
                options: {
                  destination: `${config.get('LOG_DIR')}/error.log`,
                  append: false,
                },
              },
              {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  ignore:
                    'pid,hostname,req.headers,req.remoteAddress,req.remotePort,res.headers',
                  singleLine: true,
                },
              },
            ],
          },
        },
      }),
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    UserModule,
    AuthzModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    connectionFactory,
  ],
})
export class AppModule {}
