import { css, styled } from "styled-components";

export const ContentContainer = styled.div`
  ${({ theme, gap }) => css`
    padding: 1.25rem;
    width: 100%;
    height: auto;
    background-color: ${theme.colors.mainSecondary};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: ${gap ? gap : "1.25rem"};
    max-height: calc(100vh - 1rem);
  `}
`;
