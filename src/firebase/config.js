import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// this way worked instead of the one in course

const firebaseConfig = {
    apiKey: "AIzaSyD1cFdJJ-uZDlfYltS1hqOQQiBKcXTWsH0",
    authDomain: "spotifyyy-1285e.firebaseapp.com",
    projectId: "spotifyyy-1285e",
    storageBucket: "spotifyyy-1285e.appspot.com",
    messagingSenderId: "591697720842",
    appId: "1:591697720842:web:3feba9f70216a608a911f3",
    measurementId: "G-9Q1HR731DW"
  };
  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore services
  const projectfirestore = firebase.firestore()

  // invoke func to return a timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  // init authentication
  const projectAuth = firebase.auth()

  // init storage
  const projectStorage = firebase.storage()
  
  export { projectfirestore, projectAuth ,projectStorage ,timestamp } 
