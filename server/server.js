// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {collection, getDocs, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5xRTgMrWfIJPEd3uHq9RQDKQhpdqR_Ig",
  authDomain: "rochers-bd262.firebaseapp.com",
  projectId: "rochers-bd262",
  storageBucket: "rochers-bd262.appspot.com",
  messagingSenderId: "328278354090",
  appId: "1:328278354090:web:76a4402e08b450f37488d3",
  measurementId: "G-2D45NFGPNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

const brownies = await getDocs(collection(db, 'brownies'))
console.log(brownies);