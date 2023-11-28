import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const productsKey = "productsKey";

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup" key={productsKey}>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
