import { combinedReducers } from 'redux';

import userReducer from './user/user.reducer';

// Calling and saying what are the reducers
export default combinedReducers({
    user: userReducer
});