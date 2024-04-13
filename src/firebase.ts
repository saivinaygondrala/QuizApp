// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA8lZ2wC2G5TeMkuj0XvwzKVJrpic_eDY",
  authDomain: "auth-f22d6.firebaseapp.com",
  projectId: "auth-f22d6",
  storageBucket: "auth-f22d6.appspot.com",
  messagingSenderId: "278272512366",
  appId: "1:278272512366:web:4f1e556be3ab023f10717f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);