import { ComicsShopTitle, ComicsShopContainer, ComicsShopping } from "./styles";
import P from "prop-types";
import { Card } from "../Card";

export const ComicsShop = ({ comics }) => {
  return (
    <ComicsShopContainer>
      <ComicsShopTitle>Nossas comics</ComicsShopTitle>
      <ComicsShopping>
        {comics.map((comics) => {
          const { id, title, prices, thumbnail } = comics;
          return (
            <Card
              key={id}
              id={id}
              extension={thumbnail.extension}
              title={title}
              image={thumbnail.path}
              price={prices[0].price}
            />
          );
        })}
      </ComicsShopping>
      <li id="sentinela" className="sentinela" />

    </ComicsShopContainer>
  );
};

ComicsShop.propTypes = {
  comics: P.array.isRequired,
};
