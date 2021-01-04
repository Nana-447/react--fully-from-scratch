import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { 
    firestore, 
    convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// Creating components with Snipper HOC Components
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// Functional Component converted to Class Component
class ShopPage extends React.Component {
    // If we do this, we don't need to write constructor and super every time. Couple of versions ago, React started handling this for us
    // If you are in a class component and if you write "state = {} it will understand you"
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    // Shop Component reading from Firebase (App Function)
    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        
        // Reading directly from Firebase (NOW USING PROMISE EVENT AND OBSERVABLES)
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            //console.log(collectionsMap); // THIS VALUE WILL UPDATE OUR SHOP REDUCER
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    };

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    // Render instead of Component attribute
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    // Render instead of Component attribute
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} 
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => 
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);