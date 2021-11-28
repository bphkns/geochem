import {
  Controller,
  Get,
  Inject,
  Logger,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QldbDriver } from 'amazon-qldb-driver-nodejs';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { DB_CONNECTION } from './db/db.provider';
import { Permissions } from './decorators/permission.decorator';
import { Status } from './models/status.entity';

@ApiTags(`Status APIs`)
@Controller({
  version: '1',
})
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(@Inject(DB_CONNECTION) private db: QldbDriver) {}

  /**
   * Status check endpoint
   */
  @Get('status')
  getStatus(): Status {
    return {
      status: 'OK',
    };
  }

  /**
   *
   * DB connection status of application
   */
  @Get('db-status')
  async getDbStatus(): Promise<Status> {
    try {
      await this.db.getTableNames();
      return {
        status: 'OK',
      };
    } catch (error) {
      this.logger.error(error);
      return {
        status: 'NOT OK',
        error: error.message || 'DB error',
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(`protected`)
  async protectionCheck(@Req() req) {
    return req.user;
  }
}
