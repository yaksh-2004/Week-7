// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7aS_se3dAUcet80qY2rcgr3D02QVDWqA",
  authDomain: "dummy-website-51fc8.firebaseapp.com",
  projectId: "dummy-website-51fc8",
  storageBucket: "dummy-website-51fc8.firebasestorage.app",
  messagingSenderId: "417362113239",
  appId: "1:417362113239:web:0065c30b19ba17eac5b692",
  measurementId: "G-JT4V1C9MB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {auth};
