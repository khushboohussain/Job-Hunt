// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // apiKey: 'AIzaSyDUerYr9SX76c7II8wILM6w3stgioT2-nk',
    // authDomain: 'fire-auth-1bf57.firebaseapp.com',
    // databaseURL: 'https://fire-auth-1bf57.firebaseio.com',
    // projectId: 'fire-auth-1bf57',
    // storageBucket: 'fire-auth-1bf57.appspot.com',
    // messagingSenderId: '1026663454855',
    // appId: '1:1026663454855:web:a09cbce96d0496fe'
    apiKey: "AIzaSyDhrGqjEKECco5Qduyfi03_lTLedtsHFZQ",
    authDomain: "fireauth-55897.firebaseapp.com",
    databaseURL: "https://fireauth-55897.firebaseio.com",
    projectId: "fireauth-55897",
    storageBucket: "fireauth-55897.appspot.com",
    messagingSenderId: "536807431931",
    appId: "1:536807431931:web:dfa2cbae599e3da2a41a5e"
  },
  apiEndpoint: `http://${window.location.hostname}:3000`,
  wsEndpoint: `http://${window.location.hostname}:3000/`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
