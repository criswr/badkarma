import React, { useContext } from "react";
import cartIcon from '../images/cart.svg';
import "./CartWidget.css"
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cart} = useContext(CartContext)

    const totalItems = () => {
        return cart.reduce((total, item) => total += item.quantity, 0)
    }

    return (
        <div className="cart">
            <img src={cartIcon} alt="Carrito" />
            <div className="cartItemCount">
                {totalItems()}
            </div>
        </div>
    )
}

export default CartWidget;