import React from "react";
import Header from "../../components/Header/Header";
import "./MainStyle.scss";
import { NavLink } from "react-router-dom";
export default function MainPage() {
  const styles = {
    width: "200px",
    height: "200px",
    borderRadius: "37px 30px 0px 0px",
  };
  return (
    <div>
      <Header />
      <div className="middle">
        <div className="m_header">
          <h1>Catalog</h1>
        </div>
        <div className="middle_container">
          <div className="block1">
            <NavLink to="/supplements">
              <img src="../../img/photo2.jpg" alt="error" style={styles} />
            </NavLink>
            <nav>
              <NavLink to="/supplements">
                <button className="b_sup">
                  <p>Supplements</p>
                </button>
              </NavLink>
            </nav>
          </div>
          <div className="block2">
            <NavLink to="/equipment">
              <img src="../../img/photo3.jpg" alt="error" style={styles} />
            </NavLink>
            <nav>
              <NavLink to="/equipment">
                <button className="b_quip">
                  <p>Equipment</p>
                </button>
              </NavLink>
            </nav>
          </div>
          <div className="block3">
            <NavLink to="/sportswear">
              <img src="../../img/photo4.png" alt="error" style={styles} />
            </NavLink>
            <NavLink to="/sportswear">
              <button className="b_sw">
                <p>Sportswear</p>
              </button>
            </NavLink>
          </div>
        </div>
        <footer className="bot">
          <h1 className="b_hr">Contact information</h1>
          <div className="bottom_container">
            <div className="bottom_block">
              <ul>
                <li>Number phone: +353857814569</li>
                <li>email:thumpel81@gmail.com</li>
                <li>
                  Support Service Hours:
                  <br />
                  9:00-18:00
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
