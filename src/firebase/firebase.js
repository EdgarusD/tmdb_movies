// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1qOWWkMgEHI7th5UsDZ1JBv77R6sx3Cs",
  authDomain: "tmdb-movies-database.firebaseapp.com",
  projectId: "tmdb-movies-database",
  storageBucket: "tmdb-movies-database.appspot.com",
  messagingSenderId: "382267197563",
  appId: "1:382267197563:web:4fedf28173a76816affade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);