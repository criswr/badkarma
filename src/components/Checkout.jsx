import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import "./Checkout.css";
import { addDoc, collection, getFirestore} from "firebase/firestore";


const Checkout = () => {
    const {cart, totalSum, clear} = useContext(CartContext)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    const [orderItems, setOrderItems] = useState([])
    const [orderTotal, setOrderTotal] = useState()

    const createOrder = () => {
        const date = new Date()
        const order = {
            buyer: {name:name, phone:phone, email:email},
            items: cart.map(item => ({id:item.id, title:item.name, quantity:item.quantity, price:item.price, priceTotal:item.quantity * item.price})),
            total: totalSum(),
            orderDate: date.toLocaleString('es-ES')
        }

        const db = getFirestore();
        const ordenesCol = collection(db, "ordenes");
        addDoc(ordenesCol, order).then((snapShot) => {
        setOrderId(snapShot.id)
        setOrderItems(cart)
        setOrderTotal(order.total)
        clear()
        })}
            
    return (
        <div className="cartMainContainer">
        <div className="cartContainer">
            <h1 className="title">{orderId === "" ? "Finalizar compra" : `Detalles orden ${orderId}`}</h1>
            <div className="checkoutContent">
                <div className="checkoutForm">
                    <h2>Datos:</h2>
                    {orderId === "" ?
                    <form>
                        <input type="text" className="checkoutInput" placeholder="Ingrese su nombre" onInput={(e) => {setName(e.target.value)}} />
                        <input type="text" className="checkoutInput" placeholder="Ingrese su teléfono" onInput={(e) => {setPhone(e.target.value)}} />
                        <input type="text" className="checkoutInput" placeholder="Ingrese su email" onInput={(e) => {setEmail(e.target.value)}} />
                        <button type="button" className="itemAdd createOrder" onClick={createOrder}>Realizar pedido</button>
                    </form>
                    :
                    <div>
                        <p>Nombre: <b>{name}</b></p>
                        <p>Teléfono: <b>{phone}</b></p>
                        <p>Email: <b>{email}</b></p>
                        <p>Orden: <b>{orderId}</b></p>
                    </div>
                    }
                </div>
                <div>
                    {orderId === "" ?
                        <table className="cartTable">
                            <tbody>
                                <tr className="cartTotal">
                                    <td colSpan={2} className="cartCenter">Resumen:</td>
                                </tr>
                                {cart.map(item => (
                                    <tr key={item.id} className="cartTbody">
                                        <td><img src={item.image} alt={item.name} width={30} /></td>
                                        <td className="checkoutItem">({item.quantity}) {item.name}</td>
                                    </tr>
                                ))}
                                <tr className="cartTotal">
                                    <td colSpan={2}>Total ${totalSum()}</td>
                                </tr>
                            </tbody>
                        </table>
                    :
                        <table className="cartTable">
                            <tbody>
                                <tr className="cartTotal">
                                <td colSpan={2} className="cartCenter">Resumen:</td>
                                </tr>
                                {orderItems.map(item => (
                                    <tr key={item.id} className="cartTbody">
                                        <td><img src={item.image} alt={item.name} width={30} /></td>
                                        <td className="checkoutItem">({item.quantity}) {item.name}</td>
                                    </tr>
                                ))}
                                <tr className="cartTotal">
                                    <td colSpan={2}>Total ${orderTotal}</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Checkout;