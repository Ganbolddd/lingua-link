// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApQRyGVS7FnbZdPY_5Do206QJ79ir7VA0",
  authDomain: "lingualink-79fad.firebaseapp.com",
  projectId: "lingualink-79fad",
  storageBucket: "lingualink-79fad.appspot.com",
  messagingSenderId: "300330680210",
  appId: "1:300330680210:web:4b50e23be7da406a1f0b4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
export const auth = getAuth(app);
