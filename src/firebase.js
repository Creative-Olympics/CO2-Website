import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8HzripA_M0tkPAZVRd6Rzyxt6Gd052Ls",
  authDomain: "rahneil-n3-co.firebaseapp.com",
  projectId: "rahneil-n3-co",
  storageBucket: "rahneil-n3-co.appspot.com",
  messagingSenderId: "924629805963",
  appId: "1:924629805963:web:87c4e0d86c8caf643c9d8e",
  measurementId: "G-345HMCZEHS"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
