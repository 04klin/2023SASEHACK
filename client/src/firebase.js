import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCFeCl1-_c4Fe_pLImu0vKaPuY5ozUjJJ8",
  authDomain: "sasehack-e05ef.firebaseapp.com",
  projectId: "sasehack-e05ef",
  storageBucket: "sasehack-e05ef.appspot.com",
  messagingSenderId: "163671015943",
  appId: "1:163671015943:web:f1429f4658e4ea2066a0a2",
  measurementId: "G-6YDRR6GP6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db1 = getFirestore(app);

export const auth = getAuth(app);
export const db = getDatabase(app);