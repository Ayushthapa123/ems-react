// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// import firebase from 'firebase/app';
import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';



const firebaseConfig = {
    apiKey:process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID,

  };

if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);
 

}
export const auth = firebase.auth();
  export default firebase;