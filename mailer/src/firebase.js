// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaTmFp9aaClUFCC2Bw5OqZ5516GP_UNnk",
  authDomain: "mailer-85904.firebaseapp.com",
  projectId: "mailer-85904",
  storageBucket: "mailer-85904.appspot.com",
  messagingSenderId: "1069596314613",
  appId: "1:1069596314613:web:a1174675d00d8a0e02eebc",
  measurementId: "G-QQ8PV24P82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();