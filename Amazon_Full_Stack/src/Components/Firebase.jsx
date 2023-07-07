// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkTC4ioy99scWfiATLP9aBDnP1MOCFVDw",
  authDomain: "clone-3a725.firebaseapp.com",
  projectId: "clone-3a725",
  storageBucket: "clone-3a725.appspot.com",
  messagingSenderId: "716929875353",
  appId: "1:716929875353:web:5b2891f6478e0913c52708",
  measurementId: "G-C7QJVDB9V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export {auth};