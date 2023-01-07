import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1)
    const [added, setAdded] = useState(false)
    const [itemStock, setItemStock] = useState(stock)

    const decrementarCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const incrementarCounter = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const addToCart = (quantity) => {
        if (quantity <= itemStock && itemStock !== 0) {
            setItemStock(itemStock - quantity)
            setAdded(true)
            if (itemStock - quantity === 0){
                setCounter(0)
            }else{
                setCounter(1)
            }

        }else{
            setCounter(0)
        }

        onAdd(quantity)
    }

    return (
        <div className="itemCount">
            <div className="countOperations">
                <button className="operationButton" onClick={decrementarCounter}>-</button>
                <div className="itemCounter">{counter}</div>
                <button className="operationButton" onClick={incrementarCounter}>+</button>
            </div>
            {!added ? 
                <button className="itemAdd" onClick={() => {addToCart(counter)}}>Agregar al carrito</button> :
                <Link to={"/cart"}> <button className="itemAdd">Finalizar compra</button></Link>
            }
        </div>
    )
}

export default ItemCount;