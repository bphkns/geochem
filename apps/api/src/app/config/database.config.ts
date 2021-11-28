import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432,
  maxConcurrentTransactions: process.env.DB_CONCURRENT_TRANSACTIONS || 10,
  region: process.env.DB_REGION,
  retryLimit: process.env.DB_RETRY_LIMIT || 10,
}));
