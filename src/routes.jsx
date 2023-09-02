import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import  DetailsComics  from "./pages/DetailsComics";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import CartForm from "./pages/CartForm";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Comic-details" element={<DetailsComics />} />
          <Route path="/Cart-form" element={<CartForm />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
