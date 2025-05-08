// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxPQlYiz358vGhaY2TgHKFnRuVRTDKt4E",
    authDomain: "byto-e01bd.firebaseapp.com",
    projectId: "byto-e01bd",
    storageBucket: "byto-e01bd.firebasestorage.app",
    messagingSenderId: "475568919298",
    appId: "1:475568919298:web:c05269df258d4dc926e81b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;