import "./ItemDetail.css";

import { useState } from "react";
import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    console.log("Añadiendo al carrito:", quantity);
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="pinfo">Categoria: {category}</p>
        <p className="pifo">Descripción: {description}</p>
        <p className="pinfo">Precio: $ {price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
          />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
