import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { 
    signInSuccess, 
    signInFailure 
} from './user.actions';

import { 
    auth, 
    googleProvider, 
    createUserProfileDocument 
} from '../../firebase/firebase.utils';

export function* getSnapshopFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
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

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas(){
    yield all(
        [
            call(onGoogleSignInStart),
            call(onEmailSignInStart)
        ]
    );
}