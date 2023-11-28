import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../AsyncMock/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(itemId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
