import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/Main/MainPage";
import Sup from "./pages/supplements_page/Sup";
import Equip from "./pages/equipment_page/Equip";
import Sportswear from "./pages/sportswear_page/Sportswear";
import ProductPageSup from "./pages/productsSupPages/ProductPageSup";
import ProductPageEquip from "./pages/equipment_page/equipDetailsPage/ProductPageEquip";
import SwProductPage from "./pages/sportswear_page/swProductdetails/SwProductPage";
import Basket from "./components/Header/Basket/Basket";
import PayForm from "./pages/Form/PayForm/payForm";
import Form from "./pages/Form/Form";
import HeaderEquip from "./components/SecondHeader/HeaderEquip";
import HeaderSup from "./components/SecondHeader/HeaderSup";
import HeaderSW from "./components/SecondHeader/HeaderSW";
import Header from "./components/Header/Header";
import NoPage from "./pages/NoPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems, setCartItems]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/"element={<Header/>} />
          <Route path="/"element={<HeaderEquip/>} />
          <Route path="/"element={<HeaderSup/>} />
          <Route path="/"element={<HeaderSW/>} />
          <Route path="supplements" element={<Sup />} />
          <Route
            path="/supplements/product/:id"
            element={
              <ProductPageSup addToCart={setCartItems} cartItems={cartItems} />
            }
          />
          <Route path="equipment" element={<Equip />} />
          <Route
            path="/equipment/product/:id"
            element={
              <ProductPageEquip
                addToCart={setCartItems}
                cartItems={cartItems}
              />
            }
          />
          <Route path="sportswear" element={<Sportswear />} />
          <Route
            path="/sportswear/product/:id"
            element={
              <SwProductPage addToCart={setCartItems} cartItems={cartItems} />
            }
          />
          <Route
            path="/basket"
            element={<Basket cartItems={cartItems} updateCart={setCartItems} />}
          />
          <Route path="/form" element={<Form cartItems={cartItems} updateCart={setCartItems}/>}/>
          <Route path="/payForm" element={<PayForm/>}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
