// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f65ce.firebaseapp.com",
  projectId: "mern-estate-f65ce",
  storageBucket: "mern-estate-f65ce.firebasestorage.app",
  messagingSenderId: "215731571792",
  appId: "1:215731571792:web:9ceff44157cb2739b85555",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
