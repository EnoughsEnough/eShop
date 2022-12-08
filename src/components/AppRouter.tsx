<<<<<<< Updated upstream
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { ProductItemAbout } from '../pages/ProductItemAbout'
import { Home } from './Home'
import { Navbar } from './UI/Navbar'
=======
import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Order } from "../pages/Order";
import { ProductItemAbout } from "../pages/ProductItemAbout";
import { Home } from "./Home";
>>>>>>> Stashed changes

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductItemAbout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/*" element={<Home />} />
      <Route path="/yourOrder" element={<Order />} />
    </Routes>
  );
};
