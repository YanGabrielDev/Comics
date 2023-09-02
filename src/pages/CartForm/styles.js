import { styled, css } from "styled-components";

export const CartFormContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const CartFormSeparate = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
    width: 100%;

    p.empty-cart {
      font-size: ${theme.font.size.large};
      font-family: ${theme.font.family.baloo};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;

export const CartFormTitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.family.baloo};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const CartContainer = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: solid 1px ${theme.colors.softBlack};

    img {
      height: 5rem;
      border-radius: 0.5rem;
    }
    div.cart-details-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      div.cart-details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: flex-end;
        align-items: end;
      }

      span.cart-title {
        @media (max-width: 600px) {
          white-space: nowrap;
          max-width: 100px;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  `}
`;

export const ScrollArea = styled.div`
  max-height: 330px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const GridTwoFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
export const GridThreeFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Contentfooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
