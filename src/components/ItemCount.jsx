import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    const [addText, setAddText] = useState("Agregar")

    const decrementarCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const incrementarCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const onAdd = () => {
        if (stock > 0) {
            setAddText("Producto(s) agregado")
            setTimeout(() => {
                setAddText("Agregar")
            }, 2000);
        }
    }

    return (
        <div className="itemCount">
            <div className="countOperations">
                <button className="operationButton" onClick={decrementarCounter}>-</button>
                <div className="itemCounter">{counter}</div>
                <button className="operationButton" onClick={incrementarCounter}>+</button>
            </div>
            <button className="itemAdd" onClick={onAdd}>{addText}</button>
        </div>
    )
}

export default ItemCount;