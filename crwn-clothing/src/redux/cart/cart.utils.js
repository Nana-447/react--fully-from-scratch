export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( // Using find function to verify the condition of an array
        cartItem => cartItem.id === cartItemToAdd.id 
    );

    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 } // Adding a new item and its quantity
                : cartItem
            )
    };

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }] // If it's not the same, it adds the new value to the array on the second parameter
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    
    // If it's the last quantity of the product
    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    
    // If it's diferent than 1
    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ? // If the id's are the same
        { ...cartItem, quantity: cartItem.quantity - 1} // subtracts 1 item from cartItem quantity
        : cartItem // only the cartItem returns
    );
}