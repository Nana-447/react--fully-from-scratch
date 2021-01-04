import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'; 
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// Creating components with Snipper HOC Components
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// Functional Component converted to Class Component
class ShopPage extends React.Component {
    // If we do this, we don't need to write constructor and super every time. Couple of versions ago, React started handling this for us
    // If you are in a class component and if you write "state = {} it will understand you"
    /*state = {
        loading: true
    };*/

    // Shop Component reading from Firebase (App Function)
    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    };

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;

        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    // Render instead of Component attribute
                    render={(props) => 
                        <CollectionsOverviewWithSpinner 
                            isLoading={isCollectionFetching} 
                            {...props}
                        />} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    // Render instead of Component attribute
                    render={(props) => 
                        <CollectionPageWithSpinner 
                            isLoading={!isCollectionLoaded} 
                            {...props}
                        />} 
                />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ShopPage);