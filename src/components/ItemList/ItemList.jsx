import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  console.log("Lista de productos:", products);

  return (
    <div className="ListGroup">
      {products &&
        products.map((prod) =>
          prod && prod.id ? <Item key={prod.id} {...prod} /> : null
        )}
    </div>
  );
};

export default ItemList;
