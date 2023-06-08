import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import productsDetails from "./ProductsDetails";
import "./styleSup.scss";
import { useNavigate } from "react-router-dom";

export default function ProductPageSup({ addToCart, cartItems }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  // Состояние для хранения выбранных товаров
  const navigate = useNavigate();
  const productsDetail = productsDetails.find((p) => p.id === parseInt(id));
  const styles = {
    width: "450px",
    height: "450px",
  };
  const [price, setPrice] = useState(productsDetail.price);
  const increment = () => {
    setQuantity(quantity + 1);
    setPrice(productsDetail.price * (quantity + 1));
  };

  const decrement = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
      setPrice(productsDetail.price * (quantity - 1));
    }
  };

  const addNewItem = () => {
    const newItem = {
      id: productsDetail.id,
      image: productsDetail.image,
      price: price,
      quantity: quantity,
    };
    console.log((prevItems) => [...prevItems, newItem]);
    addToCart((prevItems) => [...prevItems, newItem]);
  };

  const handleCartClick = () => {
    navigate("/basket", { state: { cartItems } });
  };

  return (
    <>
      <Header />
      <main className="product">
        <div className="block1">
          <img
            src={productsDetail.image}
            alt={productsDetail.product}
            style={styles}
          />
          <div className="quan" type="submit">
            <button className="butPlus" onClick={decrement}>
              -
            </button>
            <p>{quantity}</p>
            <button className="butMinus" onClick={increment}>
              +
            </button>
            {productsDetail.buttonQat}
          </div>
        </div>
        <div className="block2">
          <h1>${price}</h1>
          <p>{productsDetail.desription}</p>
          <div className="two_buttons">
            <button className="add" type="submit" onClick={addNewItem}>
              {productsDetail.buttonAddCard}
            </button>
            <button className="buy" type="submit" onClick={handleCartClick}>
              {productsDetail.buttonBuy}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
