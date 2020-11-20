import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Local Storage (Regular one)

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

// Config saying what we are going to persist on storage
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart'] // Here we pass all the reducers that we want to persist. User is being persistint in firebase, so we don't really want it here
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);