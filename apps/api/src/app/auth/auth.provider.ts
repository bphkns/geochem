import { FactoryProvider } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import authZConfig from '../config/authZ.config';
import { AuthenticationClient } from 'auth0';

export const AUTHZ_CLIENT = `AUTHZ_AUTH_CLIENT`;
export const AUTHZ_MGMT_CLIENT = `AUTHZ_MANAGEMENT_CLIENT`;

export const clientConnectionFactory: FactoryProvider = {
  provide: AUTHZ_CLIENT,
  useFactory: (authConfig: ConfigType<typeof authZConfig>) => {
    return new AuthenticationClient({
      domain: authConfig.domain,
      clientId: authConfig.clientId,
      clientSecret: authConfig.clientSecret,
    });
  },
  inject: [authZConfig.KEY],
};

export const mgmtConnectionFactory: FactoryProvider = {
  provide: AUTHZ_MGMT_CLIENT,
  inject: [authZConfig.KEY, AUTHZ_CLIENT],
  useFactory: (
    authConfig: ConfigType<typeof authZConfig>,
    authClient: AuthenticationClient
  ) => {
    return authClient.clientCredentialsGrant({
      audience: `${authConfig.issuer}/api/v2/`,
      scope: `read:users update:users create:users delete:users`,
    });
  },
};
