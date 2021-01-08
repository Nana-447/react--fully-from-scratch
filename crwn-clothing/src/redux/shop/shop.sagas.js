// importing effect for Saga
import { takeEvery } from 'redux-saga/effects'; // listeners for every action
import ShopActionTypes from './shop.types';

// Generator function with Yield (Check Redux-Saga Notes)
// Function of Yields: 

export function* fetchCollectionsAsync(){
    yield console.log("I am fired");
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}