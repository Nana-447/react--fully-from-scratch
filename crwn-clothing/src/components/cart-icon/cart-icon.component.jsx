import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; // Important SVG as a React Component

import './cart-icon.styles.scss';

// Functional component
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

// # mapStateToProps = Connects the state from reducers
// It always will rerender our component
// It works as a observable
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

// # mapDispatchToProps = Connects actions to the reducer and changes values
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);