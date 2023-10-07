import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFeCl1-_c4Fe_pLImu0vKaPuY5ozUjJJ8",
  authDomain: "sasehack-e05ef.firebaseapp.com",
  projectId: "sasehack-e05ef",
  storageBucket: "sasehack-e05ef.appspot.com",
  messagingSenderId: "163671015943",
  appId: "1:163671015943:web:f1429f4658e4ea2066a0a2",
  measurementId: "G-6YDRR6GP6S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);


