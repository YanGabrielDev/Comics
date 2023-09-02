import { styled, css } from "styled-components";
export const HeaderContainer = styled.header`
  padding: 1rem 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-width: 6rem;
  cursor: pointer;
`;

export const Couter = styled.div`
${({theme}) => css`
  display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 12px;
    background-color: ${theme.colors.main};
    color: ${theme.colors.primary};
    border: solid 1px ${theme.colors.primary};
    position: absolute;
    right: 56px;
    top: 8px;
`}
`;
