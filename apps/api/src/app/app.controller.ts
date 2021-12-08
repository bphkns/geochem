import { Controller, Get, Inject, Logger, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QldbDriver } from 'amazon-qldb-driver-nodejs';
import { ManagementClient } from 'auth0';
import { AUTHZ_MGMT_CLIENT } from './auth/auth.provider';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { DB_CONNECTION } from './db/db.provider';
import { Status } from './models/status.entity';

@ApiTags(`Status APIs`)
@Controller({
  version: '1',
})
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(
    @Inject(DB_CONNECTION) private db: QldbDriver,
    @Inject(AUTHZ_MGMT_CLIENT) private mgmtClient: ManagementClient
  ) {}

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
  protectionCheck(): Status {
    return {
      status: 'OK',
    };
  }
}
