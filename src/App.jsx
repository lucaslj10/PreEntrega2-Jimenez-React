import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <CartProvider>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<ItemListContainer />}></Route>
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              ></Route>
              <Route
                path="/item/:itemId"
                element={<ItemDetailContainer />}
              ></Route>
              <Route path="/Cart" element={<cart />} />

              <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
            </Routes>
            {/* <ItemListContainer>greeting={'Bienvenidos'}</ItemListContainer>
        // <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}></ItemCount> */}
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
