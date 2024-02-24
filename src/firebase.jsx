import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAN9VOHmYfElRuZfpp6iiu13Z_735h8Rs8",
  authDomain: "csgame-c4f63.firebaseapp.com",
  projectId: "csgame-c4f63",
  storageBucket: "csgame-c4f63.appspot.com",
  messagingSenderId: "102963567824",
  appId: "1:102963567824:web:c7cfe85b51f8da54d1d2d5",
};

export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const database = getDatabase(app);
export const dbService = getFirestore(app);
export const storage = getStorage(app);
