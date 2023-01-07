import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import "./Cart.css"
import CartContent from "./CartContent";

const Cart = () => {
    const {cart} = useContext(CartContext)

    return (
        <div className="cartMainContainer">
            <div className="cartContainer">
                <h1 className="title">Carrito</h1>
                <div className="cartContent">
                    {cart.length === 0 ? <h2>No has agregado nada al carrito</h2> : <CartContent />}
                </div>
            </div>
        </div>
    )
}

export default Cart;