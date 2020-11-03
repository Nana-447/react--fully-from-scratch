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

// Function to get user from Database
export const createUserProfileDocument = async(userAuth, additionalData) => {
    // If no object returned
    if (!userAuth) return

    // Query inside Firestore
    const userRef = firestore.doc(`users/${userAuth.uid}`); // Query Reference
    const snapShot = await userRef.get(); // Get Snapshot of the Reference

    if(!snapShot.exists){ // If there is no Snapshot, we are going to create one
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            // Creating a New Snapshot for this reference (saving data)
            await userRef.set({ // Set is the Create Method
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } 
        catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef; // If we want to use the Doc Reference to use somewhere
}

firebase.initializeApp(config);

// We can use anywhere we want, calling them below:
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// In case we want the whole library
export default firebase;