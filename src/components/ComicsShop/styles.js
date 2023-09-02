import {css, styled} from 'styled-components'

export const ComicsShopTitle = styled.h3`
${({theme}) =>css`
 font-size: ${theme.font.size.medium};
 font-family: ${theme.font.family.baloo};
 font-weight: ${theme.font.weight.bold};
`}
`
export const ComicsShopContainer = styled.div`
${() =>css`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
`}
`
export const ComicsShopping = styled.div`
${() =>css`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-auto-columns: 100px;
 gap: 1rem;

 @media  (max-width: 1280px) {
grid-template-columns: 1fr 1fr 1fr;
grid-auto-columns: 200px;
 }
 @media  (max-width: 900px) {
grid-template-columns: 1fr 1fr;
justify-items: center; }
 @media  (max-width: 600px) {
grid-template-columns: 1fr ;
justify-items: center; }
`}
`
