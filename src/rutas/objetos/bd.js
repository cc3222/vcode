const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const key = require('../../../vcode-key.json')

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

const app = initializeApp({
  credential: cert(key)
});

const db = getFirestore();

module.exports = db;
