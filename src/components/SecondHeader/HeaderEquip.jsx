import React from "react";
import { NavLink } from "react-router-dom";
import './StyleSH.scss'
import { Link } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
export default function HeaderEquip(){
    return(
       <header className="main_page">
        <div className="header">
          <Link to="/">
           <h1><span>//</span>Dumbbell's sport goods</h1>
          <p>It's all about the gym</p>
          </Link>
        <div className="links_container">
          <div className="l_block1">
            {/* <a href=" "><p>Suplements</p></a> */}
            <NavLink to="/supplements">
            <p>Suplements</p>
            </NavLink>
          </div>
          <div className="l_block2">
            {/* <a href=" "><p>Sportswear</p></a> */}
            <NavLink to="/sportswear">
            <p>Sportswear</p>
            </NavLink>
          </div>
        </div>
       <Link to="/basket">
           <FaShoppingCart className="shopCard"/>
        </Link>
      </div>
       </header>
       
    );
}