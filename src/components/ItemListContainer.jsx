import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import arrayProductos from "./json/products.json";
import Spinner from "./Spinner";

const ItemListContainer = () => {
    const {category} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => {
                resolve(category ? arrayProductos.filter(item => item.category === category) : arrayProductos);
            }, 200);
        });

        promise.then(data => {
            setItems(data)
            setLoading(false)
        });

    }, [category]);

    return (
        <div className="mainContainer">
            <h1 className="title">{category ? category : "Bad Karma"}</h1>
            <div className="container">
                {loading ? <Spinner/> : <ItemList products={items}/>}
            </div>
        </div>
    )
}

export default ItemListContainer;