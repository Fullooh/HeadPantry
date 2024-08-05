// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYaiggGQ6r_jfD7l3gT2d3wTqbuvYYaVg",
  authDomain: "inventory-tracker-4510a.firebaseapp.com",
  projectId: "inventory-tracker-4510a",
  storageBucket: "inventory-tracker-4510a.appspot.com",
  messagingSenderId: "300926089016",
  appId: "1:300926089016:web:ed15b84e4eaa467dc933cd",
  measurementId: "G-1GG1FMN1LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}