import * as firebase from 'firebase';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyBb2xXktbUC8eeWiuzNJguGr1GqGJ9Q2gc',
    authDomain: 'boomtown-b4c5d.firebaseapp.com',
    databaseURL: 'https://boomtown-b4c5d.firebaseio.com',
    projectId: 'boomtown-b4c5d',
    storageBucket: 'boomtown-b4c5d.appspot.com',
    messagingSenderId: '1029211266068'
};

const FirebaseApp = firebase.initializeApp(config);
const FirebaseAuth = firebase.auth();
const FirebaseDB = firebase.database();
const FirebaseStorage = firebase.storage(FirebaseApp);

export {
    FirebaseApp,
    FirebaseAuth,
    FirebaseDB,
    FirebaseStorage
};
