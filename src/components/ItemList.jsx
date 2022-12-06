import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        products.map(product => <Item key={product.id} item={product} />)
    )
}

export default ItemList;