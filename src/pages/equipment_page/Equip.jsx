import React from "react";
import "./EquipStyle.scss";
import HeaderEquip from "../../components/SecondHeader/HeaderEquip";
import productsEquip from "./ProductsEquip";
import { Link } from "react-router-dom";
export default function Equip() {
  const styles = {
    width: "200px",
    height: "200px",
    borderRadius: "37px 30px 0px 0px",
    boxShadow: "2px 2px 2px 5px rgba(0, 0, 0, 0.77)",
  };
  return (
    <div>
      <HeaderEquip />
      <h1 className="equip">Equipment</h1>
      <main className="equip_container">
        {productsEquip.map((product) => (
          <div className="equip_block" key={product.id}>
            <Link to={`/equipment/product/${product.id}`}>
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
