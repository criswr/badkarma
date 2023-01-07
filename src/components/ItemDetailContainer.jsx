import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayProductos from "./json/products.json";
import Spinner from "./Spinner";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.find(item => item.key === id) : arrayProductos);
            }, 200);
        })

        promise.then(data => {
            setItem(data)
            setLoading(false)
        });

    }, [id]);

    return (
        <div className="mainContainer">
            <div className="container">
                {loading ? <Spinner /> : <ItemDetail item ={item}/>}
            </div>
        </div>
    )
}   

export default ItemDetailContainer;