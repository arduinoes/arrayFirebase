import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGak5QNXkTqerWSzlGk_ggpztV9d5nxH8",
  authDomain: "trello-93f5d.firebaseapp.com",
  databaseURL: "https://trello-93f5d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trello-93f5d",
  storageBucket: "trello-93f5d.appspot.com",
  messagingSenderId: "635225529291",
  appId: "1:635225529291:web:48befb5e930751df0e744e",
  measurementId: "G-XPJD17ZPBC"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { db };