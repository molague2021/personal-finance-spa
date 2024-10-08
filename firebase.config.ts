// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: 'personal-finance-spa.firebaseapp.com',
  projectId: 'personal-finance-spa',
  storageBucket: 'personal-finance-spa.appspot.com',
  messagingSenderId: '560028410503',
  appId: '1:560028410503:web:bbcd5a4bf8c0c0e260ce22',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
