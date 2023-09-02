import logo from '../../assets/svgs/Marvel_Logo.svg'
import { HeaderContainer, Logo } from './styles'
import {ShopButton} from '../ShopButton'
export const Header = () => {
    return(
        <HeaderContainer>
            <Logo src={logo} alt="Logo da marvel"/>
            <ShopButton/>
        </HeaderContainer>
    )
}