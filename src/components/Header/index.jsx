import logo from "../../assets/svgs/Marvel_Logo.svg";
import { Couter, HeaderContainer, Logo } from "./styles";
import { ShopButton } from "../ShopButton";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
export const Header = () => {
  const nevigate = useNavigate();
  const { totalItems } = useCart();
  return (
    <HeaderContainer>
      <Logo
        src={logo}
        alt="Logo da marvel"
        onClick={() => {
          nevigate("/");
        }}
      />
      <div>
        <ShopButton />
        <Couter>{totalItems}</Couter>
      </div>
    </HeaderContainer>
  );
};
