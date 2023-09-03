import { HeroContainer, HeroImage, HeroTitle, HeroDetails, HeroSubTitle } from "./styles"
import heroImage from "../../assets/svgs/hero.svg"
export const Hero = () => {
    return(
        <HeroContainer>
            <HeroDetails>
            <HeroTitle>Explore a loja que te leva para o mundo dos quadrinhos!</HeroTitle>
            <HeroSubTitle>Venha conhecer as histórias e comprar os seus quadrinhos.</HeroSubTitle>
            </HeroDetails>
            <HeroImage src={heroImage} alt="logo do deadpool"/>
        </HeroContainer>
    )
}