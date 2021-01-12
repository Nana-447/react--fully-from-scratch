import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { 
    signInSuccess, 
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions';

import { 
    auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.utils';

export function* getSnapshopFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        //Put: put things back to our Redux Flow
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(){
    try{
        // Instead of using async await function like before, we are using yield here (it's a promise)
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshopFromUserAuth(user);
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshopFromUserAuth(user);
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshopFromUserAuth(userAuth);
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield (put(signOutSuccess()));
    } catch(error){
        yield put(signOutFailure(error));
    }
}

export function* signUp({payload: {email, password, displayName}}){
    try{
        // Firebase method from auth module
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    } catch(error){
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshopFromUserAuth(user, additionalData);
}

// Calling functions

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, signInAfterSignUp);
}

// Exporting and Calling all Sagas

export function* userSagas(){
    yield all(
        [
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onCheckUserSession),
            call(onSignOutStart),
            call(onSignOutStart),
            call(onSignUpSuccess)
        ]
    );
}