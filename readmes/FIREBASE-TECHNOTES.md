# FIREBASE TECHNICAL NOTES

- NoSQL Database or else: I giant JSON;

## FIREBASE INSTALLATION

1. [Access firebase](https://firebase.google.com/)

2. LogIn to your Google Account;
3. [Go to Console](https://console.firebase.google.com/u/0/?pli=1);

4. Add / Create a new project and name it;

5. After Creating it, go to the homepage of the project;

6. Go to the main "Project Overview";

7. Click on "WEB" to add a new App;

8. Type a nickname of the app;

9. Copy the firebaseConfig given, as below:
```
{
    apiKey: "AIzaSyAcUhSYeM3N-L7DYdTS6oCuXO-vfBV-6wo",
    authDomain: "crwn-db--lessa.firebaseapp.com",
    databaseURL: "https://crwn-db--lessa.firebaseio.com",
    projectId: "crwn-db--lessa",
    storageBucket: "crwn-db--lessa.appspot.com",
    messagingSenderId: "564153916489",
    appId: "1:564153916489:web:0eaf63abca4e89ab0e7398",
    measurementId: "G-CF6H42QD9B"
};
```

10. Add yarn firebase to frontend react project:
``yarn add firebase``

11. Create a component in React like [this](https://github.com/jvlessa/React--Zero-To-Mastery/blob/master/crwn-clothing/src/firebase/firebase.utils.js)

12. In case you want to allow SignIn with Google, that is the case:
- Go to the tab "Authentication" on firebase admin;
- Click on "SignIn Methods";
- Enable Google;

13. Also, Enable email and password;

## DATABASE CREATION

1. Go to the Firebase BD dashboard;

2. Click on ["Cloud FireStore"](https://console.firebase.google.com/u/0/project/crwn-db--lessa/firestore);

3. Click on "Create New Database";

4. Select "Test Mode";

5. Select the timezone of the database. You can choose only once;

6. Advance to enable and create the database and wait until the screen loads;

## IMPORTANT TO KNOW
- Collections: groups of objects;
- Document: the real final data;
- You can put collections inside each document;
- Collection (table) >> Document (row) >> Collection (table) >> etc;

## MAIN METHODS OF GETTING DOCUMENTS AND COLLECTIONS FROM FIREBASE

```
import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
```

- Long Query:

`` firestore.collection('users').doc('id099012092').collection('cartItems').doc('id120931290') ``

- Short Query for DOC:

`` firestore.doc('/users/id099012092/cartItems/id120931290') ``

- Short Query for Collection:

`` firestore.collection('/users/id099012092/cartItems') ``

## QUERIES IN FIRESTORE FROM FIREBASE

- Firestore returns 2 types of objects: References and Snapshots;
- Those queries can be either Documents' or Collections' versions (depends of your search);

- QueryReference: "current" place in the database;

## QUERY REFERENCE

- An object that represents the "current" place in the database that we are querying;

`` firestore.doc('/users:userid/'); ``
`` firestore.collections('/users'); ``

- Does not have the actual data of the collection or the document;
- It instead has properties with details that tells us details about it;

### DOCUMENT REFERENCE

- Performs CRUD methods: .set(), .get(), .update(), .delete();
- We also can "add" documents to a collection using: 

`` collection.add(); ``
`` collectionRef.add({value: prop}); ``

- We get the Snapshot running ".get()" from a Reference;

## QUERY SNAPSHOT

- Query Snapshot comes from our collectionReference object;
`` firestore.collection('users'); ``

- docs: Give us back an array of the documents inside of our collection;
- empty: Similar to exists command, except tells us if our query is empty or not;
- size: Tells us how many objects there are inside our collection;

### DOCUMENT SNAPSHOT

- Allows us to check if the object .exists
- We can also get the properties calling .data;

## FIREBASE ERROR OF READING / PERMISSIONS

- There has been a recent update in Firebase's database for new users where by default, there is a permission rule that disables reading from the database after 30 days! If this is not changed, some of you may start to see an error in your application saying FirebaseError: Missing or insufficient permissions;

- This can be quickly fixed by navigating to the rules tab in the database of your firestore console;

- If you do not see `` request.time < timestamp.date(year, month, day); `` on line 5, you don't need to worry about this. If you do, just remove it, and replace the `` : if `` with a `` ; `` on line 4;