// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./apiKey";
import { apiKeys } from "./apiKey";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKeys.firebase,
  authDomain: "app-ecd5c.firebaseapp.com",
  projectId: "app-ecd5c",
  storageBucket: "app-ecd5c.appspot.com",
  messagingSenderId: "1083467454714",
  appId: "1:1083467454714:web:02f05bce9ce1cc46bad143"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth};