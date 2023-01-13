import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATfhYxhZGBm91jMdSguZJHbjzqs5ce05k",
    authDomain: "inmemerkezihts-a2b02.firebaseapp.com",
    databaseURL: "https://inmemerkezihts-a2b02-default-rtdb.firebaseio.com",
    projectId: "inmemerkezihts-a2b02",
    storageBucket: "inmemerkezihts-a2b02.appspot.com",
    messagingSenderId: "142144663030",
    appId: "1:142144663030:web:2dc1819f5c315f70cb6bd7",
    measurementId: "G-PJN1LEXVEJ"
};

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)
const auth = getAuth(app)

export { database, auth }