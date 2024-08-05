// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87MKWTxrRIgxNO0lR2pgt6Me4whimn7s",
  authDomain: "amn-hs2-9.firebaseapp.com",
  projectId: "amn-hs2-9",
  storageBucket: "amn-hs2-9.appspot.com",
  messagingSenderId: "684134508662",
  appId: "1:684134508662:web:a6316c5750e7c966fc9757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
