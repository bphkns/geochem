import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import authZConfig from '../config/authZ.config';
import {
  clientConnectionFactory,
  mgmtConnectionFactory,
} from './auth.provider';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule.forFeature(authZConfig),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [JwtStrategy, clientConnectionFactory, mgmtConnectionFactory],
  exports: [PassportModule, clientConnectionFactory, mgmtConnectionFactory],
})
export class AuthzModule {}
