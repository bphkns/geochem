import { registerAs } from '@nestjs/config';

export default registerAs('authZConfig', () => ({
  audience: 'https://auth.geochempro.com',
  issuer: 'https://thewebkernel.auth0.com/',
  algorithms: ['RS256'],
}));
