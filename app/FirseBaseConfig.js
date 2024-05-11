// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC2ttzHDeC3-v3dSnrbyC7F5dERaxMlwo",
  authDomain: "fynder-a4082.firebaseapp.com",
  projectId: "fynder-a4082",
  storageBucket: "fynder-a4082.appspot.com",
  messagingSenderId: "99620428616",
  appId: "1:99620428616:web:e7f4e5fdd04ae1227f317d",
  measurementId: "G-8CEHM8GPGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db}