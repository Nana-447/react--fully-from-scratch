import { createContext } from 'react';

const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {
        // empyt function
    }
});

export default CartContext;