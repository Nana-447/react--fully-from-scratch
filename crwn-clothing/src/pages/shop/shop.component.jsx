import React from 'react';

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super (props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state; // Desconstructing state

        return (<div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => ( // Making parameters come as they have their own object
                    <CollectionPreview key = {id} {...otherCollectionProps} />
                ))
            }
        </div>);
    }
}

export default ShopPage;