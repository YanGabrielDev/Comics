import { HeroContainer, HeroImage, HeroTitle, HeroDetails, HeroSubTitle } from "./styles"
import heroImage from "../../assets/svgs/hero.svg"
export const Hero = () => {
    return(
        <HeroContainer>
            <HeroDetails>
            <HeroTitle>Enconte a sua HQ favorita na melhor loja de Comics ja criada!</HeroTitle>
            <HeroSubTitle>Explore o universo das HQs na Loja de Comics!</HeroSubTitle>
            </HeroDetails>
            <HeroImage src={heroImage} alt="logo do deadpool"/>
        </HeroContainer>
    )
}