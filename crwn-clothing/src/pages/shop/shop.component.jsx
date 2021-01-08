import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// Functional Component converted to Class Component
class ShopPage extends React.Component {
    // If we do this, we don't need to write constructor and super every time. Couple of versions ago, React started handling this for us
    // If you are in a class component and if you write "state = {} it will understand you"
    /*state = {
        loading: true
    };*/

    // Shop Component reading from Firebase (App Function)
    componentDidMount(){
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    };

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
    null, 
    mapDispatchToProps
)(ShopPage);