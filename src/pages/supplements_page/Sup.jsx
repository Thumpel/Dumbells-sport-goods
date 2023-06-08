import React from "react";
import "./SupStyle.scss";
import HeaderSup from "../../components/SecondHeader/HeaderSup";

import productsSup from "./ProductsSup";
import { Link } from "react-router-dom";
export default function Sup() {
  const styles = {
    width: "200px",
    height: "200px",
    borderRadius: "37px 30px 0px 0px",
    boxShadow: "2px 2px 2px 5px rgba(0, 0, 0, 0.77)",
  };
  return (
    <div>
      <HeaderSup />
      <h1 className="supp">Supplemants</h1>
      <main className="sup_container">
        {productsSup.map((product) => (
          <div className="sup_block" key={product.id}>
            <Link to={`/supplements/product/${product.id}`}>
              <img src={product.image} alt="error" style={styles} />
              <div className="block_price">
                <p className="price">{product.price}</p>
              </div>
              <button>
                <p>Buy</p>
              </button>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
