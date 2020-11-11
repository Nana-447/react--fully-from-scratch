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