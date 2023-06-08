import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../../components/Header/Header";
import productsEquipDetails from "./productsEquipDetails";
import './styleEquip.scss'
export default function ProductPageEquip({ addToCart, cartItems }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const productsDetail = productsEquipDetails.find(
    (p) => p.id === parseInt(id)
  );
  const [price, setPrice] = useState(productsDetail.price);
  const styles = {
    width: "450px",
    height: "450px",
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
      <main className="equipDetails">
        <div className="block1">
          <img src={productsDetail.image} alt="error" style={styles} />
          <div className="quan" type="submit">
            <button className="butPlus" onClick={decrement}>
              -
            </button>
            <p>{quantity}</p>
            <button className="butMinus" onClick={increment}>
              +
            </button>
            {productsDetail.buttonQuan}
          </div>
        </div>
        <div className="block2">
          <h1>${price}</h1>
          <button className="add" type="submit" onClick={addNewItem}>
            {productsDetail.buttonAdd}
          </button>
          <button className="buy" type="submit" onClick={handleCartClick}>
            {productsDetail.buttonBuy}
          </button>
        </div>
      </main>
    </>
  );
}
