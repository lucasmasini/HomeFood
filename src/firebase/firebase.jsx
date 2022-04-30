// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAruxRH069k08p-JeXqUjHqAh1EYD_afuY",
    authDomain: "homefood-d8034.firebaseapp.com",
    projectId: "homefood-d8034",
    storageBucket: "homefood-d8034.appspot.com",
    messagingSenderId: "530920653594",
    appId: "1:530920653594:web:95ff9b99cd6ad65cda62a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);