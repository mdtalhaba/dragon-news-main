// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3rtS-xu_5tpN40EI6gHkAMX5VEuCwN_8",
    authDomain: "dragon-news-5c6ba.firebaseapp.com",
    projectId: "dragon-news-5c6ba",
    storageBucket: "dragon-news-5c6ba.appspot.com",
    messagingSenderId: "650544680794",
    appId: "1:650544680794:web:3bccba69b876b0e614ad63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;