// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyp6MmKzyxJTgLkygG4m9WjDbiFQt7uF0",
  authDomain: "tkgbds.firebaseapp.com",
  projectId: "tkgbds",
  storageBucket: "tkgbds.appspot.com",
  messagingSenderId: "1042729485054",
  appId: "1:1042729485054:web:7d95071c0496f2a62d1baf",
  measurementId: "G-6G5LQ89XHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;