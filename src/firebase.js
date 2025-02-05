// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  update,
  remove,
  onValue,
} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7cTypPQE_Dg2rt30-JkRvz8ONPMpAuoE",
  authDomain: "software-5364e.firebaseapp.com",
  databaseURL: "https://software-5364e-default-rtdb.firebaseio.com",
  projectId: "software-5364e",
  storageBucket: "software-5364e.firebasestorage.app",
  messagingSenderId: "848147796212",
  appId: "1:848147796212:web:2328c8fdc558dd416f0ea1",
  measurementId: "G-28XN89S3E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getDatabase(app);

export { ref, push, set, get, update, remove,onValue};