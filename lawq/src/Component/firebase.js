// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDlwWyJt01jHQy8g1kpVY8YwewDCgyO7Lo",
  authDomain: "justice4all-3be16.firebaseapp.com",
  projectId: "justice4all-3be16",
  storageBucket: "justice4all-3be16.appspot.com",
  messagingSenderId: "950721192556",
  appId: "1:950721192556:web:67cfc2ee175b56dead6e49",
  measurementId: "G-85XYLN4Q29"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore ();
const auth = firebase.auth();
export { db, auth };