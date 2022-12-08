<<<<<<< Updated upstream
import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <div>
            <Link to='/cart'>Корзина</Link>
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./Navbar..css";

export const Navbar = () => {
  const [onClick, setOnclick] = useState(false);
  const { cartItems } = useTypedSelector((state) => state.cart);

  const handleClicker = () => {
    setOnclick(!onClick);
  };

  return (
    <div>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          Logo
        </Link>
        <div onClick={handleClicker} className="navbar__catalog">
          <div style={{ marginRight: "10px" }}>Каталог</div>
          {onClick ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </div>
        <div className="navbar__input">
          <i className="fa-solid fa-magnifying-glass navbar__search-logo"></i>
          <input placeholder="Type to search..." />
        </div>
        <div className="navbar__cart">
          <Link to="/cart">
            <div className="cart__amount">
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
              <div className="cart__count">{cartItems.length}</div>
            </div>
          </Link>
          <div>Корзина</div>
>>>>>>> Stashed changes
        </div>
    </div>
  )
}
