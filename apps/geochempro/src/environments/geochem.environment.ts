export const environment = {
  production: false,
  auth: {
    domain: 'thewebkernel.auth0.com',
    clientId: '8LvAH7jktc5qFIQf6R4UigwGFceHICsR',
    organization: 'org_paqMYnLk3QEOXwly',
    redirectUri: window.location.origin,
    audience: `https://auth.geochempro.com`,
  },
  namespace: `https://auth.geochempro.com`,
  apiUrl: 'http://localhost:3333/api/v1',
};

import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
