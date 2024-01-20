// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8wabRR5pCA9KcUmUEj7CkOsALGAlstGY",
  authDomain: "netflixgpt-72b0a.firebaseapp.com",
  projectId: "netflixgpt-72b0a",
  storageBucket: "netflixgpt-72b0a.appspot.com",
  messagingSenderId: "956918216133",
  appId: "1:956918216133:web:f9ff4498af5007f9cf87ac",
  measurementId: "G-7JHB016QGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();   //har jagah use hoga


//deploy app form local YYY