export const environment = {
  production: false,
  auth: {
    domain: 'thewebkernel.auth0.com',
    clientId: '8LvAH7jktc5qFIQf6R4UigwGFceHICsR',
    organization: 'org_paqMYnLk3QEOXwly',
    redirectUri: `${window.location.origin}/login`,
    audience: `https://auth.geochempro.com`,
    errorPath: '/login',
  },
  namespace: `https://auth.geochempro.com`,
  apiUrl: 'http://localhost:3333/api/v1',
};

import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
