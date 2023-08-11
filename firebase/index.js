import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { 
    getFirestore,
    addDoc,
    collection,
    getDocs,
    onSnapshot,
    query,
    where
 } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8H3JHd15emX6ArS1XAtXOtzd2hKWMcOA",
  authDomain: "react-native-note-app-21e28.firebaseapp.com",
  projectId: "react-native-note-app-21e28",
  storageBucket: "react-native-note-app-21e28.appspot.com",
  messagingSenderId: "1150969073",
  appId: "1:1150969073:web:c98f526b61c051afe13550"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {
    app,
    auth,
    db,
    addDoc,
    collection,
    getDocs,
    onSnapshot,
    query,
    where
}