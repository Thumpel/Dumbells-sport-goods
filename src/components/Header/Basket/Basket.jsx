import Header from "../Header";
import "./StyleBasket.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Basket({ cartItems, updateCart }) {
  const styles = {
    weight: "120px",
    height: "120px",
  };

  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    setAllItems((prevItems) => [...cartItems]);
    console.log(cartItems);
  }, [cartItems]);
  useEffect(() => {
    console.log(allItems);
  }, [allItems, setAllItems]);
  const removeItem = (itemId) => {
    const removeCardItems = cartItems.filter((item) => item.id !== itemId);
    updateCart(removeCardItems);
  };
  return (
    <div>
      <Header />
      <h1 align="center">Basket</h1>
      <div className="cart-items">
        {allItems.map((item) => {
          console.log(item);
          return (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt="error" style={styles} />
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="removeButt"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
        {/* <Link to="/form" className={cartItems.length === 0 ? "disabled" : ""}>
          <button disabled={cartItems.lenght === 0} className="orderButt">
            Make an order
          </button>
        </Link> */}
        <div>
      {cartItems.length === 0 ? (
        <p align="center">Your busket is Empty</p>
      ) : (
        <div>
         <button className="orderButt" >
           <Link to="/form" className={cartItems.length === 0 ? 'disabled' : ''}>
            <p>Make a order</p>
          </Link>
         </button>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}
