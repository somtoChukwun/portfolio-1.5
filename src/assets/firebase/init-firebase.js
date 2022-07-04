// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6Frphosoyx61mLrFvPn7luL4Th_WUIM4",
    authDomain: "my-portfolio-1-939dc.firebaseapp.com",
    projectId: "my-portfolio-1-939dc",
    storageBucket: "my-portfolio-1-939dc.appspot.com",
    messagingSenderId: "1033855223652",
    appId: "1:1033855223652:web:99be0a9038832f86a09c71"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
export const db = getFirestore(app)