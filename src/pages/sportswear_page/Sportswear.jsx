import React from "react";
import "./SportStyle.scss";
import HeaderSW from "../../components/SecondHeader/HeaderSW";
import productSW from "./productsSW";
import { Link } from "react-router-dom";
export default function Sportswear() {
  const styles={
    width: "200px",
    height: "200px",
    borderRadius: "37px 30px 0px 0px",
    boxShadow: "2px 2px 2px 5px rgba(0, 0, 0, 0.77)",
  }
  return (
    <div>
      <HeaderSW />
      <h1 className="sw">Sportwear</h1>
      <div className="container_clothes">
        {productSW.map((product)=>(
          <main className="sw_block" key={product.id}>
            <Link to={`/sportswear/product/${product.id}`}>
            <img src={product.image} alt="error" style={styles} />
              <div className="block_price">
                <p className="price">{product.price}</p>
              </div>
              <button>
                <p>Buy</p>
              </button>
            </Link>
          </main>
        ))}
      </div>
    </div>
  );
}
