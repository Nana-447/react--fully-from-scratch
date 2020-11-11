import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; // Important SVG as a React Component

import './cart-icon.styles.scss';

// Functional component
const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;