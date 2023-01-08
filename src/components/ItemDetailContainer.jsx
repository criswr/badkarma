import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "productos", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false)
            }
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