// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import auth_config from '../../auth_config.json';
const domain = auth_config.domain;
const clientId = auth_config.clientId;

export const environment = {
  production: false,
  serverUrl: 'http://localhost:8081',
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  },
  firebase: {
    apiKey: 'AIzaSyCpxVNI6UOKaznCamucwLnuu9VQJDhe9s0',
    authDomain: 'the-garmin-experience.firebaseapp.com',
    projectId: 'the-garmin-experience',
    storageBucket: 'the-garmin-experience.appspot.com',
    messagingSenderId: '976001018044',
    appId: '1:976001018044:web:6ef062e821f18b1b82c8b9'
  }
};
