// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3rsKCp-oK8aWTzWLNXzTMIj7rqO268BI",
  authDomain: "jornada-tiktok-ce3fc.firebaseapp.com",
  projectId: "jornada-tiktok-ce3fc",
  storageBucket: "jornada-tiktok-ce3fc.appspot.com",
  messagingSenderId: "1044350063014",
  appId: "1:1044350063014:web:d91b6d17cf9faebfa63f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;