// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAekpQCtOUGyNbzG5O4xsg71kl4HlC2f0w",
  authDomain: "assignment5fronend.firebaseapp.com",
  projectId: "assignment5fronend",
  storageBucket: "assignment5fronend.appspot.com",
  messagingSenderId: "528059303025",
  appId: "1:528059303025:web:c5d93db96687f2846607d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
