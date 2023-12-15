import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7c0uFXKVU-WxcVtvuu4uKSJUaf_LG0Vc",
  authDomain: "t-shirt-5e7bc.firebaseapp.com",
  projectId: "t-shirt-5e7bc",
  storageBucket: "t-shirt-5e7bc.appspot.com",
  messagingSenderId: "476234558097",
  appId: "1:476234558097:web:8e2d76646a2b9315e3ed30",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
