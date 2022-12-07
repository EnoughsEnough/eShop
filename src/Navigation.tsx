import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter,  } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { useActions } from "./components/hooks/useActions";
import { Navbar } from "./components/UI/Navbar";


export const Navigation = () => {
  const {cartItems} = useSelector((state) => state.cart)
  const {calculateTotal} = useActions()

  useEffect(() => {
    calculateTotal()
  }, [cartItems])
  return (
    <BrowserRouter>
    <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
