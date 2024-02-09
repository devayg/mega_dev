import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBuGEUfZHLICAdKsqnCKPVQyUq8kRCAXVI",
  authDomain: "megasails-26-01-2024.firebaseapp.com",
  databaseURL: "https://megasails-26-01-2024-default-rtdb.firebaseio.com",
  projectId: "megasails-26-01-2024",
  storageBucket: "megasails-26-01-2024.appspot.com",
  messagingSenderId: "319536345437",
  appId: "1:319536345437:web:39adb84310340ba938b8b4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const database = getDatabase(app);
