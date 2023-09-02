import { css, styled } from "styled-components";

export const LoaderContainer = styled.div`
  ${() => css`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  `}
`;

export const LoaderIcon = styled.span`
  ${({ theme }) => css`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid ${theme.colors.primary};
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: spin 1s linear infinite;


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `}
`;
