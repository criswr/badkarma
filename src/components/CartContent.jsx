import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import "./CartContent.css"

const CartContent = () => {
    const {cart, removeItem, clear, totalSum} = useContext(CartContext)

    return (
        <div className="cartContent">
            <table className="cartTable">
                <thead>
                    <tr className="cartThead">
                        <td colSpan="2">Producto</td>
                        <td className="cartCenter">Cantidad</td>
                        <td className="cartCenter">Precio</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id} className="cartTbody">
                            <td><img src={item.image} alt={item.name} width={40} /></td>
                            <td><Link to={"/item/" + item.id}>{item.name}</Link></td>
                            <td className="cartCenter">{item.quantity}</td>
                            <td className="cartCenter">${item.quantity * item.price}</td>
                            <td><Link title="Eliminar" onClick={() => {removeItem(item.id)}}>✖</Link></td>
                        </tr>
                    ))}
                    <tr className="cartTotal">
                        <td></td>
                        <td></td>
                        <td className="cartCenter">Total</td>
                        <td className="cartCenter">${totalSum()}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="finalButtons">
                <Link title="Eliminar todos los productos" onClick={clear}><button className="itemAdd fadedButton">✖ Vaciar carrito</button></Link>
                <Link onClick={clear}><button className="itemAdd">Finalizar compra 🡺</button></Link>
            </div>
            
        </div>
        )
}

export default CartContent;