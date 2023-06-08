import React from "react";
import "./HeaderStyle.scss";
import "./StyleIconBasket.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
export default function Header() {
  return (
    <header className="main_page">
      <div className="header">
        <Link to="/">
           <h1>
          <span>//</span>Dumbbell's sport goods
        </h1>
        <p>It's all about the gym</p>
        </Link>
        <Link to="/basket">
          <FaShoppingCart className="shopCard" />
        </Link>
      </div>
    </header>
  );
}
