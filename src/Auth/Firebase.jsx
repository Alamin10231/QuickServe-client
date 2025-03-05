// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRR8wW82W5cGPTw_kfpjOLNQ4h4C7ieZU",
  authDomain: "quickserve-157d0.firebaseapp.com",
  projectId: "quickserve-157d0",
  storageBucket: "quickserve-157d0.firebasestorage.app",
  messagingSenderId: "965977043321",
  appId: "1:965977043321:web:a2f54785e84399e08bbfa8",
  measurementId: "G-7D8FR34DL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);