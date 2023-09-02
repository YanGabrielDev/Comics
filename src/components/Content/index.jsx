import { ContentContainer } from "./styles"
import P from 'prop-types'

export const Content = ({children, gap}) => {
    return(
        <ContentContainer gap={gap}>{children}</ContentContainer>
    )
}

Content.propTypes = {
    children: P.node.isRequired,
    gap: P.string,

  };
  