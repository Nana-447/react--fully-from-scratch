import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => ( // dispacth comes from mapDispatchToProps: we are not passing the second parameter to the "connect", so we can use this to call any function from reducers' actions
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { 
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} /> // Rendering CartItems based on the state read from redux connect
                ))
                :
                <span className='empty-message'>Your cart is empty!</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden()); // using dispatch to call functions from reducers' actions
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

// mapStateToPros = reads the state value
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// withRouter has to be called after connect
export default withRouter(connect(mapStateToProps)(CartDropdown));