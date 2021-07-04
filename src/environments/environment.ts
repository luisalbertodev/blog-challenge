// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:
    'https://newsapi.org/v2/top-headlines?apiKey=abff5e69789847b1b7df3032378abfba&language=es',
  apiKeyServiceNews: 'abff5e69789847b1b7df3032378abfba',
  firebase: {
    apiKey: 'AIzaSyCFi6Y92eXOFxaBFGGhDX-q5reOwoQAT1c',
    authDomain: 'blog-challenge-18f9b.firebaseapp.com',
    projectId: 'blog-challenge-18f9b',
    storageBucket: 'blog-challenge-18f9b.appspot.com',
    messagingSenderId: '963060237099',
    appId: '1:963060237099:web:46d301906f3255ebf7bb6e',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
