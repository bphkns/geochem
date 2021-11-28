import { FactoryProvider } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import databaseConfig from '../config/database.config';
import { Agent } from 'https';
import { QldbDriver, RetryConfig } from 'amazon-qldb-driver-nodejs';

export const DB_CONNECTION = 'DB_CONNECTION';

export const connectionFactory: FactoryProvider = {
  provide: DB_CONNECTION,
  useFactory: (dbConfig: ConfigType<typeof databaseConfig>) => {
    const maxConcurrentTransactions =
      dbConfig.maxConcurrentTransactions as number;
    const retryLimit = dbConfig.retryLimit as number;

    //Reuse connections with keepAlive
    const agentForQldb: Agent = new Agent({
      keepAlive: true,
      maxSockets: maxConcurrentTransactions,
    });

    const serviceConfigurationOptions = {
      region: dbConfig.region,
      httpOptions: {
        agent: agentForQldb,
      },
    };

    const retryConfig: RetryConfig = new RetryConfig(retryLimit);
    const qldbDriver: QldbDriver = new QldbDriver(
      'geochempro',
      serviceConfigurationOptions,
      maxConcurrentTransactions,
      retryConfig
    );

    return qldbDriver;
  },
  inject: [databaseConfig.KEY],
};
