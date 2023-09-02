import P from "prop-types";
import { CardContainer, CardImage, ComicsTitle, CardFooter } from "./styles";
import { useFormat } from "../../hooks/useFormat";
import { useNavigate } from "react-router-dom";
import { ShopButton } from "../ShopButton";
export const Card = ({ id, title, image, extension, price }) => {
  const { formatCurrency } = useFormat();
  const navigate = useNavigate();
  const hqImage = `${image}.${extension}`;
  const hqPrice = formatCurrency(price);
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
        <ShopButton />
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
};
