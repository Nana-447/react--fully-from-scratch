import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // Awesome for debugging our redux code
import { persistStore } from 'redux-persist'; // It allows our browser to cache our app to store info

import rootReducer from './root-reducer';

const middlewares = [logger];

// Spread in all of the methods or all of the values in this array [logger] into the function as arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // Basically says that our STORE is now an element persisted

export default { store, persistor };