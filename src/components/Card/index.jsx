import P from "prop-types";
import { CardContainer, CardImage, ComicsTitle, CardFooter } from "./styles";
import { useFormat } from "../../hooks/useFormat";
import { useNavigate } from "react-router-dom";
import { ShopButton } from "../ShopButton";
import { useCart } from "../../hooks/useCart";
import { ShoppingCartIcon } from "lucide-react";
import { toast } from "react-toastify";

export const Card = ({ id, title, image, extension, price, comic }) => {
  const { formatCurrency } = useFormat();
  const navigate = useNavigate();
  const hqImage = `${image}.${extension}`;
  const hqPrice = formatCurrency(price);
  const { addComicsToCart } = useCart();

  return (
    <CardContainer>
      <CardImage
        src={hqImage}
        loading="lazy"
        alt={title}
        onClick={() => navigate("/Comic-details", { state: { id: id } })}
      />
      <ComicsTitle title={title}>{title}</ComicsTitle>
      <CardFooter>
        <strong>{hqPrice}</strong>
        {price === 0 ? <span className="free">Gratuita!</span> : (

        <ShopButton onClick={() => {addComicsToCart(comic), toast.success(`${title} adicionado ao carrinho!`)}}>
          <ShoppingCartIcon />
        </ShopButton>
        )}
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
  comic: P.object.isRequired,
};
