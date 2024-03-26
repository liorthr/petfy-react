// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCTLrG1hym2AzNwtGW731t3iUy_iZs4mTo",
  authDomain: "petfy-saas.firebaseapp.com",
  projectId: "petfy-saas",
  storageBucket: "petfy-saas.appspot.com",
  messagingSenderId: "1091324410143",
  appId: "1:1091324410143:web:635eb503dd24fafa64d82a",
  measurementId: "G-RQ4G0WLE3R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
const db = getFirestore(app);
// console.log('Firebase Auth initialized:', auth);
// auth.languageCode = 'it'
// const analytics = getAnalytics(app);
export default db;