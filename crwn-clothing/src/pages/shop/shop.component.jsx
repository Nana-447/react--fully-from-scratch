import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { 
    firestore, 
    convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

// Functional Component converted to Class Component
class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    // Shop Component reading from Firebase (App Function)
    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //console.log(collectionsMap); // THIS VALUE WILL UPDATE OUR SHOP REDUCER
            updateCollections(collectionsMap);
        });
    };

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={ CollectionsOverview } />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);