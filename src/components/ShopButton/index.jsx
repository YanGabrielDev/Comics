import {ShoppingCartIcon} from 'lucide-react'
import { Button } from './styles'
import P from "prop-types";


export const ShopButton = ({onClick}) => {
    return(
        <Button onClick={onClick}>
          <ShoppingCartIcon/>
        </Button>
    )
}

ShopButton.propTypes = {
    onClick: P.func,
  };