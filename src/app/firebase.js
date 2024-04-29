
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {


  apiKey: "AIzaSyApQRyGVS7FnbZdPY_5Do206QJ79ir7VA0",
  authDomain: "lingualink-79fad.firebaseapp.com",
  projectId: "lingualink-79fad",
  storageBucket: "lingualink-79fad.appspot.com",
  messagingSenderId: "300330680210",
  appId: "1:300330680210:web:4b50e23be7da406a1f0b4b"
};
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
export const auth = firebase.auth(app);
export const storage = firebase.storage(app);
export default app;