import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetailsComics } from "./pages/DetailsComics";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comic-details" element={<DetailsComics />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
