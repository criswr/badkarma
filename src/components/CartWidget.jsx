import React from "react";
import cart from '../images/cart.svg';
import "./CartWidget.css"

const CartWidget = () => {
    const cartItems = {"data-before": "2"}

    return (
        <div className="cart" {...cartItems}>
            <img src={cart} alt="Carrito" />
        </div>
    )
}

export default CartWidget;