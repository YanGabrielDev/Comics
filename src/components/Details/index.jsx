import { useFormat } from "../../hooks/useFormat";
import thanos from '../../assets/svgs/thanos.svg'
import {
  DetailsContainer,
  DetailsDescription,
  DetailsDescriptionContainer,
  DetailsPriceContainer,
  DetailsComicTitle
} from "./styles";
import P from "prop-types";
export const Details = ({ detailsComics }) => {
  const { prices, title, description, thumbnail } = detailsComics;
  const {path, extension} = thumbnail
  const hqImage = `${path}.${extension}`;

  const { formatCurrency } = useFormat();
  const hqPrice = formatCurrency(prices[0].price);
  return (
 <>
 <DetailsComicTitle>{title}</DetailsComicTitle>
    <DetailsContainer>
        <img src={hqImage}/>
      <DetailsDescriptionContainer>
        <DetailsDescription>
          {description ?? "Ops parece que o Thanos passou por aqui..."}
        </DetailsDescription>
        {description ?? <img className="thanos-image" src={thanos} />}
        <DetailsPriceContainer>
          <strong>{hqPrice}</strong>
        </DetailsPriceContainer>
      </DetailsDescriptionContainer>
    </DetailsContainer>
 </>
  );
};

Details.propTypes = {
  detailsComics: P.object.isRequired,
};
