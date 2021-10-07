import firebase from 'firebase/compat';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4Rzap1el_E82JOAcqqr_8zu0A19DG8qo",
    authDomain: "react-clone-630be.firebaseapp.com",
    projectId: "react-clone-630be",
    storageBucket: "react-clone-630be.appspot.com",
    messagingSenderId: "382951845923",
    appId: "1:382951845923:web:85ca71b96ac3cae5010196",
    measurementId: "G-J94TFGBX4G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };