import { css, styled } from "styled-components";

export const DetailsContainer = styled.div`
  ${() => css`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    img {
      height: 20rem;
      width: 13rem;
      border-radius: 0.5rem;
    }

    img.thanos-image {
      margin: 0 auto;
      height: 8rem;

      animation: wiggle 5s ease-in-out infinite;

      @keyframes wiggle {
        0%,
        100% {
          transform: translateY(-20px);
        }
        50% {
          transform: translateY(20px);
        }
      }
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
  `}
`;

export const DetailsContainerHeader = styled.div`
  ${({ theme }) => css`
    padding: 1.25rem;
    width: 100%;
    display: flex;
    align-items: center;

    p {
      font-size: ${theme.font.size.medium};
      font-family: ${theme.font.family.baloo};
      font-weight: ${theme.font.weight.bold};
      margin-bottom: 0;
    }
  `}
`;
export const DetailsDescription = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.size.medium};
    font-family: "Poppins";
  `}
`;


export const DetailsPriceContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: flex-end;
  `}
`;

export const DetailsComicTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.family.baloo};
    font-weight: ${theme.font.weight.bold};
  `}
`;
