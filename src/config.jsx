// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaxMd9NdiAFsCzVZoOPgTfSSr4WHznPTQ",
  authDomain: "fir-authentication-96763.firebaseapp.com",
  projectId: "fir-authentication-96763",
  storageBucket: "fir-authentication-96763.appspot.com",
  messagingSenderId: "447579796035",
  appId: "1:447579796035:web:9480bf959f644fd60adaf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
