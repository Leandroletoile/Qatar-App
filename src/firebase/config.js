import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';



export const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINDSENDERID,
  appId: import.meta.env.VITE_APPID,
};


const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseStorage = getStorage(FirebaseApp);


