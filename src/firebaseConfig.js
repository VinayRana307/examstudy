// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOEnWBixdZt9897vNcVBl8HyzIvkleao",
  authDomain: "exam-study-13cf2.firebaseapp.com",
  projectId: "exam-study-13cf2",
  storageBucket: "exam-study-13cf2.appspot.com",
  messagingSenderId: "172765238667",
  appId: "1:172765238667:web:bc566232b5b251f0620b8e",
  measurementId: "G-0F4GXBB374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);