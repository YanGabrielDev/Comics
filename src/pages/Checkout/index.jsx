import { useLocation } from "react-router-dom";
import { CheckoutContainer, CheckoutDetails, CheckoutImage } from "./styles";
import stark from "../../assets/svgs/iron_man.svg";

function Checkout() {
  const location = useLocation();
  const { city, street, neighbourhood, number } = location.state.address;

  return (
    <CheckoutContainer>
      <CheckoutDetails>
        <h1>Pedido confirmado com sucesso!</h1>
        <h2>O senhor Stark já está a caminho para o endereço informado</h2>
        <strong>
          {street} - {neighbourhood}, {number}
        </strong>
        <strong>{city}</strong>
      </CheckoutDetails>
      <div>
        <CheckoutImage src={stark} alt="Capacete homem de ferro" />
      </div>
    </CheckoutContainer>
  );
}

export default Checkout;
