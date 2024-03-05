// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVvJaTCiulqDmzdrMjfmZ68aHigBiw-nY",
  authDomain: "spry-kingdom-399709.firebaseapp.com",
  projectId: "spry-kingdom-399709",
  storageBucket: "spry-kingdom-399709.appspot.com",
  messagingSenderId: "223864386552",
  appId: "1:223864386552:web:9bfc0df32fa806d70f5c0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
