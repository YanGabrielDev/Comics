import {styled, css} from "styled-components"

export const HeroContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const HeroImage = styled.img`
max-width: 400px;

@media (max-width: 1280px) {
    max-width: 264px;

}
@media (max-width: 1024px) {
    max-width: 192px;
}

@media (max-width: 600px) {
    display: none;
}
`
export const HeroTitle = styled.h1`
${({theme}) =>css`
font-weight: ${theme.font.weight.bold};
font-size: ${theme.font.size.huge};
font-family: "Baloo 2";
animation: wiggle 1s ease-in-out ;


@keyframes wiggle {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
`}
`
export const HeroSubTitle = styled.h2`
${({theme}) =>css`
font-weight: ${theme.font.weight.normal};
font-size: ${theme.font.size.medium};
font-family: "Poppins";
animation: wiggle 1s ease-in-out ;


@keyframes wiggle {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
`}
`

export const HeroDetails = styled.div`
max-width: 38rem;

`