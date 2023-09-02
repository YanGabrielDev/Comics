import { Content } from "./styles"
import P from "prop-types";


export const Container = ({children}) => {
    return(
        <Content>{children}</Content>
    )
}

Container.propTypes = {
    children: P.node.isRequired,
  };