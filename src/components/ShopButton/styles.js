import { css, styled } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2.75rem;
    position: relative;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.main};
    cursor: pointer;
     span{
        white-space: nowrap; 
        padding: 0rem 1rem;
     }
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
`;
