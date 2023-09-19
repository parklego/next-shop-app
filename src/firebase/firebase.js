// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMgClzlEw_w4vqjE40zxcS_0GiGA8LoNM",
  authDomain: "next-shop-app-9096c.firebaseapp.com",
  projectId: "next-shop-app-9096c",
  storageBucket: "next-shop-app-9096c.appspot.com",
  messagingSenderId: "1080723845348",
  appId: "1:1080723845348:web:da57e3d13e73da09d03cf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;
