// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi2UD6jR3W79yCgBDtfjfc4eM-DAUtdjk",
  authDomain: "oddaj-96c0e.firebaseapp.com",
  projectId: "oddaj-96c0e",
  storageBucket: "oddaj-96c0e.appspot.com",
  messagingSenderId: "357131976316",
  appId: "1:357131976316:web:6b9c8d21e5489a5ac693f9",
  measurementId: "G-KT7ZM654VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
//export default firebaseConfig;
