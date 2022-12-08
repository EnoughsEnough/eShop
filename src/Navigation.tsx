<<<<<<< Updated upstream
import { BrowserRouter,  } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
=======
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { useActions } from "./components/hooks/useActions";
import { IProducts } from "./components/store/product/product.types";
>>>>>>> Stashed changes
import { Navbar } from "./components/UI/Navbar";

export const Navigation = () => {
<<<<<<< Updated upstream
=======
  const { cartItems } = useSelector((state: any) => state.cart);
  const { calculateTotal } = useActions();

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);
>>>>>>> Stashed changes
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
