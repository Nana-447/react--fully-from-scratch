# TECHNICAL NOTES / TIPS FOR CRWN - CLOTHING STORE

## APP ARCHITECTURE
### FRONTEND
<img width="500" src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/crwn-fronted.jpg">

### BACKEND
<img width="300" src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/crwn-backend.jpg">

## [SASS](https://sass-lang.com/install)
- Install react SASS;
``yarn add node-sass``

- "&" = Append this aditional select (.menu-item:first-child)
- If you want, you can NEST classes on SASS:
```
.content {
      border: 0px solid black;

      .test{
            color: white;
      }
}
```
## PAGE COMPONENTS VS. COMPONENTS
- Page Component you will use it no more than once;

## FORMS
- Sign In has its own state;
- Register Log In has its own state;
- Those states do not talk to each other;

## SASS TIPS:
- Ways of refering a style inside another one;
- ``@mixin shrinkLabel {color: black};``
- ``&focus ~ .form-input-label{ @include shrinkLabel(); }``

## FIREBASE IMPLEMENTATION:
- [API Docs for Web](https://firebase.google.com/docs/auth/web/)
- [Google Auth](https://firebase.google.com/docs/auth/web/google-signin)


## LOCAL STORAGE X SESSION STORAGE
- ``window.localStorage``: Persists through the local (we can close our window or browser);
- ``window.sessionStorage``: Persists through the sessions (we can't close the window);

- If the user ever refreshes the page, the cart of products would be lose all of its information, right?
- Even the user would be lost, but the Firebase is storing it, so it's not getting lost;
- But the other info, are!
- Most of the shop websites have this problem;
- We can save it into Firebase or on our <b>Local Storage</b>;

### Commands for Storage
- It can only store and return strings!!! So...
- ``const myObjectToStore = {name: "Joao"}``
- ``window.localStorage.setItem('myItem', JSON.stringify(myObjectToStore))``
- ``const myRetrievedObject = JSON.parse(window.localStorage.getItem('myItem'))``

### Our Database Schema (Collections, Data, etc)
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/crwn-store-shop-db.jpg">