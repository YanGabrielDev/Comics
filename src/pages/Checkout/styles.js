import { css, styled } from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const CheckoutDetails = styled.div`
  ${({ theme }) => css`
  display: flex; 
  flex-direction: column;
  

 h1{
    font-family: ${theme.font.family.baloo};
    font-size: ${theme.font.size.large};
    color: ${theme.colors.primary};
    line-height: 100%;
    }

    h2{
       font-family: ${theme.font.family.poppins};
       font-size: ${theme.font.size.normal};
       color: ${theme.colors.text};
       font-weight: ${theme.font.weight.normal};
    }
`}
`;
export const CheckoutImage = styled.img`
height: 16rem;
`