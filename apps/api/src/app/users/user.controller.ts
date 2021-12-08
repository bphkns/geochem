import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Permissions } from '../decorators/permission.decorator';
import { User } from '../models/user.entity';
import { PermissionsGuard } from './../auth/guards/permissions.guard';
import { InviteUserDto } from './dto/invite-user.dto';
import { UserService } from './user.service';

@ApiTags('Users API')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller({
  path: 'users',
  version: '1',
})
export class UserController {
  logger = new Logger('User Controller');
  constructor(private userService: UserService) {}

  /**
   * All Users List
   * @returns Users List
   */
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: `Error` })
  @Permissions('read:org-user')
  @UseGuards(PermissionsGuard)
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({ description: `Error` })
  @ApiNotFoundResponse({ description: 'Not Found Error' })
  @Permissions('read:org-user')
  @UseGuards(PermissionsGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return await this.userService.getUser({ id });
  }

  /**
   * Create invitation to add User. If user is already present in auth0 tenant
   * then it will need to login else signup
   * Email will be sent to User
   * @returns inivitaion status
   */
  @Post()
  async create(@Body() invite: InviteUserDto) {
    return await this.userService.createInvitation(invite);
  }
}
