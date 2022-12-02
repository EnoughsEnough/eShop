import { BrowserRouter,  } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/UI/Navbar";


export const Navigation = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
