import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // Awesome for debugging our redux code
import { persistStore } from 'redux-persist'; // It allows our browser to cache our app to store info
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// Importing Sagas
import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development'){ // INSIDE OF NODE, THERE IS A ENVIROMENT VARIABLE. It's already configured when we create a react app
    middlewares.push(logger);
}

// Spread in all of the methods or all of the values in this array [logger] into the function as arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// comment it before writing
sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store); // Basically says that our STORE is now an element persisted

export default { store, persistor };