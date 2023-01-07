import React, {createContext, } from "react";
import { useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(item => item.key === id)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.key)) {
            const position = cart.findIndex(cartItem => cartItem.key === item.key)
            cart[position].quantity += quantity
            setCart([...cart])
        }else{
            setCart([...cart, {...item, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(cartItem => cartItem.key !== id)
        setCart([...products])
    }

    const clear = () => {
        setCart([])
    }

    const totalSum = () => {
        return cart.reduce((total, item) => total += item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, totalSum}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;