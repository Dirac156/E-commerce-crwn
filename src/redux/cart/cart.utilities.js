export const addItemToCart = function (cardItems, cardItemToAdd) {
    const existingCart = cardItems.find ( 
        cardItem =>  cardItem.id === cardItemToAdd.id 
        );

    if ( existingCart ) {
        return cardItems.map( cardItem => 
            cardItem.id === cardItemToAdd.id ?
            { ...cardItem, quantity : cardItem.quantity + 1 } :
            cardItem
        )
    }

    return [...cardItems, {...cardItemToAdd, quantity : 1}];
}

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const existingCart = cartItems.find ( 
        cartItem =>  cartItem.id === cartItemToRemove.id 
        );
    if (existingCart.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} :
        cartItem
        )
}
