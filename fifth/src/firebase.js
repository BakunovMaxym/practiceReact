// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_ZbZHtjXXTzd7NJY0a03siPioylKiFAI",
  authDomain: "practicreactfifth.firebaseapp.com",
  projectId: "practicreactfifth",
  storageBucket: "practicreactfifth.appspot.com",
  messagingSenderId: "309958754128",
  appId: "1:309958754128:web:7bf7540f5430f938b03655"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
