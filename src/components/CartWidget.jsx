import React from "react";
import cart from '../images/cart.svg';
import "./CartWidget.css"

const CartWidget = () => {
    const cartItems = 3

    return (
        <div className="cart">
            <img src={cart} alt="Carrito" />
            <div className="cartItemCount">
                {cartItems}
            </div>
        </div>
    )
}

export default CartWidget;