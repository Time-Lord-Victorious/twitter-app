// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFnstqi6_LJl_0zLO-OLowcsyzdHc7VdA",
    authDomain: "twitter-app-85f47.firebaseapp.com",
    projectId: "twitter-app-85f47",
    storageBucket: "twitter-app-85f47.appspot.com",
    messagingSenderId: "388616091657",
    appId: "1:388616091657:web:7f1e2f2ce4263af66d60d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);