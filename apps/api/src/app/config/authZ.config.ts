import { registerAs } from '@nestjs/config';

export default registerAs('authZConfig', () => ({
  domain: process.env.AUTHZ_DOMAIN,
  clientId: process.env.AUTHZ_CLIENT_ID,
  audience: process.env.AUTHZ_AUDIENCE,
  clientSecret: process.env.AUTHZ_CLIENT_SECRET,
  issuer: process.env.AUTHZ_ISSUER,
  algorithms: ['RS256'],
}));
