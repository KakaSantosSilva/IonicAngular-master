// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'IonicAngular',
  appSlogan: 'Devaneios Acumulativos',
  signInMethod: 'redirect', //redirect || popup
  policiesDate: '2023-07-07',
  firebase: {
    apiKey: "AIzaSyBkpvkoYdRTChHrgLxd4S6UHKyhlzNqmtE",
    authDomain: "ionicfrontend-c2330.firebaseapp.com",
    projectId: "ionicfrontend-c2330",
    storageBucket: "ionicfrontend-c2330.appspot.com",
    messagingSenderId: "472289926192",
    appId: "1:472289926192:web:e9bcb14f2de4abb2b461f5"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
