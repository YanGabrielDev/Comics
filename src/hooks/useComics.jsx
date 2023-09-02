import { useEffect, useState } from "react";
import { restApiProvider } from "../services/restApiProvider";

export const useComics = () => {
    const [marvelComics, setMarvelComics] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const { getComics } = restApiProvider;
  
  /**
   * Carrega as comics
   */
  async function loadComics(offset) {
    try {
      if(!isLoading){

        setIsLoading(true)
        const results = await getComics(offset);
        if (results) {
          setMarvelComics([...marvelComics,...results]);
          setIsLoading(false)
        }
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false)

    }
  }

   /**
   * Carrega mais comics ao chegar no final da tela
   */



   useEffect(() => {
    const offset = currentPage === 1 ? 0 : 20
    loadComics(offset);
  }, [currentPage, isLoading]);
  
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
