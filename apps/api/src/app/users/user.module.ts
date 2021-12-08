import { Module } from '@nestjs/common';
import { AuthzModule } from '../auth/authz.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [AuthzModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
