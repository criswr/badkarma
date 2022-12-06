import React from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
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
                <ItemCount stock={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;