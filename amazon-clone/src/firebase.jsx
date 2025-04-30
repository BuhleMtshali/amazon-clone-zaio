// firebase.js (or firebaseConfig.js or whatever you prefer)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH0w4Kri5pZISMI-SI4XvRn9VTTY2hW6c",
  authDomain: "e-clone-zaio.firebaseapp.com",
  projectId: "e-clone-zaio",
  storageBucket: "e-clone-zaio.firebasestorage.app",
  messagingSenderId: "924004423669",
  appId: "1:924004423669:web:c9976a1fb999c92f1c32bc",
  measurementId: "G-VDKFJDXCC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };


