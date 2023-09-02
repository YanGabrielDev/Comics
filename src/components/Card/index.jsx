import P from "prop-types";
import { CardContainer, CardImage, ComicsTitle, CardFooter } from "./styles";
import { useFormat } from "../../hooks/useFormat";
import { useNavigate } from "react-router-dom";
import { ShopButton } from "../ShopButton";
import { useCart } from "../../hooks/useCart";
export const Card = ({ id, title, image, extension, price, comic }) => {
  const { formatCurrency } = useFormat();
  const navigate = useNavigate();
  const hqImage = `${image}.${extension}`;
  const hqPrice = formatCurrency(price);
  const {addComicsToCart} = useCart()
  
  return (
    <CardContainer>
      <CardImage
        src={hqImage}
        loading="lazy"
        alt={title}
        onClick={() => navigate("/comic-details", { state: { id: id } })}
      />
      <ComicsTitle title={title}>{title}</ComicsTitle>
      <CardFooter>
        <strong>{hqPrice}</strong>
        <ShopButton onClick={() => addComicsToCart(comic)}/>
      </CardFooter>
    </CardContainer>
  );
};

Card.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  image: P.string.isRequired,
  extension: P.string.isRequired,
  price: P.number.isRequired,
  comic: P.object.isRequired
};
