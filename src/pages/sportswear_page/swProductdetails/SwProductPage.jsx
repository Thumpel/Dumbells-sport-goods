import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import productSWdetails from "./productSWdetails";
import Header from "../../../components/Header/Header";
import "./styleSW.scss";
export default function SwProductPage({ addToCart, cartItems }) {
  const { id } = useParams();
  const [isFocus, setFocus] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const productsDetail = productSWdetails.find((p) => p.id === parseInt(id));
  const styles = {
    width: "450px",
    height: "450px",
  };
  const [price, setPrice] = useState(productsDetail.price);
  const handleClick = (size) => {
    setFocus(size);
  };
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
    addToCart((prevItems) => [...prevItems, newItem]);
  };
  const handleCartClick = () => {
    navigate("/basket");
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
          <div className="block_sizes">
            {productsDetail.sizes.map((size) => (
              <button
                className={`size-button ${isFocus===size? "selected":""}`}
                key={size}
                onClick={()=>handleClick(size)}
              >
                {size}
              </button>
            ))}
          </div>

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
            {/* <Link to=""> */}
              <button className="buy" type="submit" onClick={handleCartClick}>
              {productsDetail.buttonBuy}
            </button>
            {/* </Link> */}
            
          </div>
        </div>
      </main>
    </>
  );
}
