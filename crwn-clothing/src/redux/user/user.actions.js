import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // Same string declared on our user.reducer.js, ok? This is the only requirement
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

// This will be different because we have our password too
export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = (user) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
});

export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});