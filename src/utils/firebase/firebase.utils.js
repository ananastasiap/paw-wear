import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB49VWVEsECC-tN89UdCoNY-XMpvctuD_Q",
  authDomain: "pet-paw-clothing-db.firebaseapp.com",
  projectId: "pet-paw-clothing-db",
  storageBucket: "pet-paw-clothing-db.appspot.com",
  messagingSenderId: "18895809344",
  appId: "1:18895809344:web:f2d9381e745c45295ba8a5"
};

const firebaseApp = initializeApp(firebaseConfig);

const privider = new GoogleAuthProvider();
privider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInGooglePopup = () => signInWithPopup(auth, privider);