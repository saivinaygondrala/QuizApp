// Import the functions you need from the SDKs you need
import API_KEY from "../apikey.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "auth-bfd69.firebaseapp.com",
  projectId: "auth-bfd69",
  storageBucket: "auth-bfd69.appspot.com",
  messagingSenderId: "206099863083",
  appId: "1:206099863083:web:a94507a6c65816a98c7c6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
