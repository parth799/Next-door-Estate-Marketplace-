// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b6483.firebaseapp.com",
  projectId: "mern-estate-b6483",
  storageBucket: "mern-estate-b6483.appspot.com",
  messagingSenderId: "553866252617",
  appId: "1:553866252617:web:16b04bfeab201c3bee8a98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);