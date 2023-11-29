import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbVQCvp_95Qi_0UWIcMh7XvXSbPFkhNGE",
  authDomain: "ecommercelj-ab58b.firebaseapp.com",
  projectId: "ecommercelj-ab58b",
  storageBucket: "ecommercelj-ab58b.appspot.com",
  messagingSenderId: "400404314783",
  appId: "1:400404314783:web:d5c063d3c6ace6af9b80aa",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
