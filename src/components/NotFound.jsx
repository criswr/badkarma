import React from "react";
import ItemListContainer from "./ItemListContainer";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="nFMainContainer">
            <div className="nFContainer">
                <div>
                    <h1>No encontramos lo que buscabas</h1>
                </div>
                <ItemListContainer />
            </div>
        </div>
    )
}

export default NotFound;