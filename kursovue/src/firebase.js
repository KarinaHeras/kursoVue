import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBn_LASoM5pLEErWly7mfkdHt0uUNnUO74",
    authDomain: "kursovue-3daa7.firebaseapp.com",
    databaseURL: "https://kursovue-3daa7.firebaseio.com",
    projectId: "kursovue-3daa7",
    storageBucket: "kursovue-3daa7.appspot.com",
    messagingSenderId: "917921027587",
    appId: "1:917921027587:web:65196e238cd3e416756036"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth };

