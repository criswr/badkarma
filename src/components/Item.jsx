import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id}>
            <div className="item">
                <img src={item.image} alt={item.name} />
                <div className="itemInfo">
                    <p className="itemName">{item.name}</p>
                    <p>${item.price.toLocaleString("es-ES", {style:"currency", currency:"CLP"})}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;