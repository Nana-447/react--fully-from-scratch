import { UserActionTypes } from './user.types';

// These states will be used on rendering components and on selectors
const INITIAL_STATE = {
    currentUser: null 
};

// This default state parameters only works if state is UNDEFINED
// If state is NULL or ANY ANOTHER VALUE, the function will consider the value passed to the function as it should be
const userReducer = (state = INITIAL_STATE, action) => {

    // Depending of the type of action
    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER: // Same string of the user.action.js
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;