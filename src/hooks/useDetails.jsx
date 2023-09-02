import { useState, useEffect } from "react";
import { marvelApiProvider } from "../services/marvelApiProvider";
import { useLocation } from "react-router-dom";

export const useDetails = () => {
    const [details, setDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation()
  
  
    const loadComicDetails = async (id) => {
      try {
        const results = await marvelApiProvider.getDetailsComics(id);
        if (results) {
          setDetails(results[0]);
          setIsLoading(false)
  
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false)
  
      }
    };
    useEffect(() => {
      const {id} = location.state;
      if (id) {
        loadComicDetails(id);
      }
    }, []);

    return { details, isLoading};
  };

 







