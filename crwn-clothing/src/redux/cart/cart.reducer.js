import CartActionTypes from './cart.types.js';

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
                cartItems: [...state.cartItems, action.payload] // Spreading the old values in the first attribute // Adding the second value to the array
            }
        default:
            return state;
    }
}

export default cartReducer;