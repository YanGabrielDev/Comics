import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import  DetailsComics  from "./pages/DetailsComics";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import CartForm from "./pages/CartForm";
import Checkout from "./pages/Checkout";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/Comic-details" element={<DetailsComics />} />
          <Route exect path="/Cart-form" element={<CartForm />} />
          <Route exect path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
