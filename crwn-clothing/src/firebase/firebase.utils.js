import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcUhSYeM3N-L7DYdTS6oCuXO-vfBV-6wo",
    authDomain: "crwn-db--lessa.firebaseapp.com",
    databaseURL: "https://crwn-db--lessa.firebaseio.com",
    projectId: "crwn-db--lessa",
    storageBucket: "crwn-db--lessa.appspot.com",
    messagingSenderId: "564153916489",
    appId: "1:564153916489:web:0eaf63abca4e89ab0e7398",
    measurementId: "G-CF6H42QD9B"
};

firebase.initializeApp(config);

// We can use anywhere we want, calling them below:
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

// In case we want the whole library
export default firebase;