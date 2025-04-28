import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH0w4Kri5pZISMI-SI4XvRn9VTTY2hW6c",
    authDomain: "e-clone-zaio.firebaseapp.com",
    projectId: "e-clone-zaio",
    storageBucket: "e-clone-zaio.firebasestorage.app",
    messagingSenderId: "924004423669",
    appId: "1:924004423669:web:c9976a1fb999c92f1c32bc",
    measurementId: "G-VDKFJDXCC0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

