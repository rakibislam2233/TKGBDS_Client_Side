// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6wsyu3JEtmw_vxQEyDglpzSkmlPm6OKQ",
  authDomain: "tkgbds-blooddonationweb.firebaseapp.com",
  projectId: "tkgbds-blooddonationweb",
  storageBucket: "tkgbds-blooddonationweb.appspot.com",
  messagingSenderId: "293332356403",
  appId: "1:293332356403:web:72afb0784d8b7f2cca8246",
  measurementId: "G-TKYHC4E82J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;