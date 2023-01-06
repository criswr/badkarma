import React, {createContext, } from "react";
import { useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.key)) {
            const position = cart.findIndex(cartItem => cartItem.key === item.id)
            cart[position].quantity += quantity
            setCart([...cart])
        }else{
            setCart([...cart, {...item, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(cartItem => cartItem.id !== id)
        setCart([...products])
    }

    const clear = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;