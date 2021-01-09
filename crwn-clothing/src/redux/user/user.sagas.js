import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

import { 
    auth, 
    googleProvider, 
    createUserProfileDocument 
} from '../../firebase/firebase.utils';

export function* signInWithGoogle(){
    try{
        // Instead of using async await function like before, we are using yield here (it's a promise)
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        //Put: put things back to our Redux Flow
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error){
        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart)]);
}