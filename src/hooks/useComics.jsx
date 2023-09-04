import { useEffect, useState } from "react";
import { marvelApiProvider } from "../services/marvelApiProvider";
import { useCart } from "./useCart";

export const useComics = () => {
  const [marvelComics, setMarvelComics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(20);
  const { getComics } = marvelApiProvider;
  const { setCartComics } = useCart();

  /**
   * Carrega as comics
   */
  async function loadComics(offset) {
    setIsLoading(true);
    try {
      setOffset(offset + 20)
      const results = await getComics(offset);
      if (results) {
        setMarvelComics([...marvelComics, ...results]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  /**
   * Carrega mais comics ao chegar no final da tela
   */
  useEffect(() => {
    loadComics(offset);
  }, [currentPage]);

  /**
   * Verifica se existe comics na localStorage
   */
  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    const cart = JSON.parse(storageCart);
    if (cart !== null) {
      setCartComics(cart);
    }
  }, []);

  /**
   * Obeserva de a sentila esta visivel, se estiver atualiza a pagina
   */
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInside) => currentPageInside + 1);
      }
    });
    const sentinelElement = document.querySelector("#sentinela");
    if (sentinelElement) {
      intersectionObserver.observe(sentinelElement);
    }
    return () => intersectionObserver.disconnect();
  }, [marvelComics]);

  return { marvelComics, isLoading };
};
