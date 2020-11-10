import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // Same string declared on our user.reducer.js, ok? This is the only requirement
    payload: user
});