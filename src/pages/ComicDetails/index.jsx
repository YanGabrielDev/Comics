import { useEffect, useState } from "react";
import { restApiProvider } from "../../services/restApiProvider";
import {ComicDetailsContainer, ComicDetailsImage} from './styles'
import { useLocation} from "react-router-dom";

export const ComicDetails = () => {
  const location = useLocation();

  const [details, setDetails] = useState();
  const loadComicDetails = async (id) => {
    try {
      const results = await restApiProvider.getDetailsComics(id);
      if (results) {
        setDetails(results[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const {id} = location.state;
    if (id) {
      loadComicDetails(id);
    }
  }, []);
  console.log(details);
  return( 
    <ComicDetailsContainer>
    <ComicDetailsImage/>
    
    </ComicDetailsContainer>
)
  
};
