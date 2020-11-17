import CartActionTypes from './cart.types.js';
import { addItemToCart } from './cart.utils';

// These states will be used on rendering components and on selectors
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden // inverse
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;