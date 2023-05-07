import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7YDAG9MBFFurDaZnmMkL3woJSGGhfUk8',
  authDomain: 'react-firebase-blog-b04bc.firebaseapp.com',
  projectId: 'react-firebase-blog-b04bc',
  storageBucket: 'react-firebase-blog-b04bc.appspot.com',
  messagingSenderId: '1026526778501',
  appId: '1:1026526778501:web:3a87fafcb2e2fbc372c5ec',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
