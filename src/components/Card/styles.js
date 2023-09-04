import { styled, css } from "styled-components";

export const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    text-align: center;
    width: 15rem;
    height: auto;
    padding: 1.25rem;
    background-color: ${theme.colors.mainSecondary};
    border-radius: 0.5rem;

    span.free{
      color: ${theme.colors.green};
    }
  `}
`;

export const CardImage = styled.img`
  ${() => css`
    height: 14rem;
    border-radius: 0.5rem;
    width: 100%;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-20px)
    }
  `}
`;

export const ComicsTitle = styled.p`
${({theme}) =>css`
font-family: ${theme.font.family.baloo};
font-weight: ${theme.font.weight.semiBold};
font-size: 1.25rem;
 white-space: nowrap;
 max-width: 200px;
 text-overflow: ellipsis;
 overflow: hidden;
`}
`

export const CardFooter = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `}
`;