import {Loader} from "../../components/Loader"
import {Details} from "../../components/Details"
import { useDetails } from "../../hooks/useDetails";


function  DetailsComics  () {
  const {details, isLoading} = useDetails()

  return( 
    <>
     {isLoading  ?  (
        <Loader/>
    ) : (

     <Details detailsComics={details}/>
    )}
    </>
)
  
}

export default DetailsComics;