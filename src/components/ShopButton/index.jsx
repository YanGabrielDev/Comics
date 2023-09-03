import { Button } from './styles'
import P from "prop-types";


export const ShopButton = ({onClick, children, type}) => {
    return(
        <Button onClick={onClick} type={type}>
          {children}
        </Button>
    )
}

ShopButton.propTypes = {
    onClick: P.func,
    children: P.node,
    type: P.string
  };