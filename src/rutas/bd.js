// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsEErr5wpHKB8jRk4WOgVzgymg4ZJADTE",
  authDomain: "vcode-basic.firebaseapp.com",
  projectId: "vcode-basic",
  storageBucket: "vcode-basic.appspot.com",
  messagingSenderId: "223152619336",
  appId: "1:223152619336:web:867a05ac7b64ac0cf97d7d",
  measurementId: "G-QY278J1VVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = analytics