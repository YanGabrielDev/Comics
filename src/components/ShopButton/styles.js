import { css, styled } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    position: relative;
    padding: 0.5rem;
    border-radius: 100%;
    border: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.main};

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
`;
