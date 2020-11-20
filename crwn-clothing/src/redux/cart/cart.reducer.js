import CartActionTypes from './cart.types.js';
import { addItemToCart, removeItemFromCart } from './cart.utils';

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
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter( // filter gives us back a new array filtered
                    cartItem => cartItem.id !== action.payload.id // if the cartItem id is not equal to the cartItem.id from the payload, then it will keep it (because of the filter function)
                )
            }
        default:
            return state;
    }
}

export default cartReducer;