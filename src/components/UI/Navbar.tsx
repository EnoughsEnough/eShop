import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar..css";

export const Navbar = () => {
  const [onClick, setOnclick] = useState(false)

  const handleClicker = () => {
    setOnclick(!onClick)
  }

  return (
    <div>
      <div className="navbar__container">
        <Link to="/">Logo</Link>
        <div onClick={handleClicker} className="navbar__catalog">
          <div style={{marginRight: '10px'}}>Каталог</div>
          {onClick ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i> }
        </div>
        <div className="navbar__input">
        <i className="fa-solid fa-magnifying-glass navbar__search-logo"></i>
          <input placeholder="Type to search..." />         
        </div>
        <div className="navbar__cart">
          <Link to="/cart">
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </Link>
          <div>Корзина</div>
        </div>
      </div>
    </div>
  );
};
