import { useEffect, useState } from "react";
import { restApiProvider } from "../../services/restApiProvider";
import {Loader} from "../../components/Loader"
import { useLocation} from "react-router-dom";
import { Details } from "../../components/Details";


export const DetailsComics = () => {
  const location = useLocation();
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);


  const loadComicDetails = async (id) => {
    try {
      const results = await restApiProvider.getDetailsComics(id);
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

  return( 
    <>
     {isLoading  ?  (
        <Loader/>
    ) : (

     <Details detailsComics={details}/>
    )}
    </>
)
  
};
