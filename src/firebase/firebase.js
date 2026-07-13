import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBVP_jEj6kTMC930pfmIhF_N40BWGkGk2s",

  authDomain: "cybershield-a20be.firebaseapp.com",

  projectId: "cybershield-a20be",

  storageBucket: "cybershield-a20be.firebasestorage.app",

  messagingSenderId: "818711007615",

  appId: "1:818711007615:web:23836ae6ec86767d1e8a4a"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;