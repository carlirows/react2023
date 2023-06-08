// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5VE7dJGpuHG7zYwIfix3VDEenUgOSHHU",
  authDomain: "react-journal-cdcb7.firebaseapp.com",
  projectId: "react-journal-cdcb7",
  storageBucket: "react-journal-cdcb7.appspot.com",
  messagingSenderId: "560299908881",
  appId: "1:560299908881:web:affd1ab647c0ba64e4b6b0"
};

// Initialize Firebase
//estos son los objetos que voy a necesitar para interactuar con firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth=getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);