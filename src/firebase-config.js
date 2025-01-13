// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBu7TQgVqznpopb_HVdo7FJw2y54-AZKNM",
  authDomain: "authenticate-dbf8a.firebaseapp.com",
  projectId: "authenticate-dbf8a",
  storageBucket: "authenticate-dbf8a.appspot.com",
  messagingSenderId: "133331608934",
  appId: "1:133331608934:web:8977a878ee2be768e314a7",
  measurementId: "G-VN59N635R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const messaging = getMessaging(app);

export { db, auth, messaging, getToken, onMessage };
