import { useState, useEffect, useContext } from "react";
import { getProductById, getProductByCategory } from "../AsyncMock/asyncMock";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
  addDoc,
  updateDoc,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams("");

  useEffect(() => {
    const variosProductosRef = collection(db, "productos");
    getDocs(variosProductosRef)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc, id, ...doc.data })));
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));

    // getDoc(productRef).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     setProducts({
    //       id: snapshot.id,
    //       ...snapshot.data(),
    //     });
    //   }
    // });
    // .catch((e) => console.error(e))
    // .finally(() => setLoading(false));

    // const asyncFunc = categoryId ? getProductByCategory : getProductById;
    // asyncFunc(categoryId)
    //   .then((response) => {
    //     setProducts(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, [id]);

  // return (
  //   <div>
  //     <h1>{greeting}</h1>
  //     <ItemList products={products} />
  //   </div>
  // );
};

export default ItemListContainer;
