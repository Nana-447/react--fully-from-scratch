import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// Calling and saying what are the reducers
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});