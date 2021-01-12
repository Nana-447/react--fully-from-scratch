import UserActionTypes from './user.types';

// These states will be used on rendering components and on selectors
const INITIAL_STATE = {
    currentUser: null,
    error: null
};

// This default state parameters only works if state is UNDEFINED
// If state is NULL or ANY ANOTHER VALUE, the function will consider the value passed to the function as it should be
const userReducer = (state = INITIAL_STATE, action) => {

    // Depending of the type of action
    switch (action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;