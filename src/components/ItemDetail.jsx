import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item])

    return (
        <div className="itemDetail">
            <div>
                <h1>{item.name}</h1>
                <img src={item.image} alt={item.name} />
            </div>
            <div className="itemInfo">
                <p className="itemPrice">${item.price.toLocaleString("es-ES", {style:"currency", currency:"CLP"})}</p>
                <p>{item.description}</p>
                <p>Temporada {item.year}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;