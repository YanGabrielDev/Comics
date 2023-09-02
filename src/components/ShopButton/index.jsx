import { Button } from './styles'
import P from "prop-types";


export const ShopButton = ({onClick, children}) => {
    return(
        <Button onClick={onClick}>
          {children}
        </Button>
    )
}

ShopButton.propTypes = {
    onClick: P.func,
    children: P.node
  };