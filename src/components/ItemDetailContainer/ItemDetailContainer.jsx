import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById, getProductByCategory } from "../AsyncMock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <>
        {loading ? (
          <h2>Cargando detalle ...</h2>
        ) : (
          productos && <ItemDetail {...productos} />
        )}
      </>
    );
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
