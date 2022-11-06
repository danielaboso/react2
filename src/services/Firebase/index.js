import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBewsXjcgFVmlO7vF2OVXDLGQ2c_yDCDSI",
    authDomain: "backend-vivalapepa-8ec0e.firebaseapp.com",
    projectId: "backend-vivalapepa-8ec0e",
    storageBucket: "backend-vivalapepa-8ec0e.appspot.com",
    messagingSenderId: "939678047649",
    appId: "1:939678047649:web:31a9fba9810c7f71957fe0"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)