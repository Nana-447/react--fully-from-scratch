// importing effect for Saga
import { takeEvery, call, put } from 'redux-saga/effects'; // listeners for every action

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { 
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

// Generator function with Yield (Check Redux-Saga Notes)
// Function of Yields:

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap, 
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}