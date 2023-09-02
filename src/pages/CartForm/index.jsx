import { Content } from "../../components/Content";
import {
  CartFormContainer,
  CartFormTitle,
  CartFormSeparate,
  CartContainer,
  ScrollArea,
  Contentfooter,
} from "./styles";
import { useCart } from "../../hooks/useCart";
import { useFormat } from "../../hooks/useFormat";
import { ShopButton } from "../../components/ShopButton";
import { Trash } from "lucide-react";
import { AddressForm } from "./addressForm";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { useEffect } from "react";

function CartForm() {
  const { formatCurrency } = useFormat();
  const { cartComics, removeComicsToCart, setCartComics } = useCart();
  const finalValue = cartComics.reduce((sumValue, cart) => {
    return sumValue + cart.prices[0].price;
  }, 0);
  const cartIsEmpty = cartComics.length === 0;

  const sumTotal = formatCurrency(finalValue);

  const formik = useFormik({
    initialValues: {
      zip_code: "",
      street: "",
      number: "",
      complement: "",
      neighbourhood: "",
      city: "",
      state: "",
    },
    validationSchema,
    onSubmit: () => {
      alert("opa");
    },
  });

  /**
   * Verifica se existe comics na localStorage
   */
  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    const cart = JSON.parse(storageCart);
    if (cart.length > 0) {
      setCartComics(cart);
    }
  }, []);

  return (
    <CartFormContainer>
      <CartFormSeparate>
        <CartFormTitle>Complete sua compra</CartFormTitle>
        <AddressForm formik={formik} />
      </CartFormSeparate>
      <CartFormSeparate>
        <CartFormTitle>Comics selecionadas</CartFormTitle>
        <Content gap="0">
          <ScrollArea>
            {!cartIsEmpty ? (
              cartComics.map((cart) => {
                const { thumbnail, title, prices } = cart;
                const { path, extension } = thumbnail;
                const hqImage = `${path}.${extension}`;
                const hqPrice = formatCurrency(prices[0].price);
                return (
                  <CartContainer key={cart.id}>
                    <img src={hqImage} loading="lazy" />
                    <div className="cart-details-content">
                      <div className="cart-details">
                        <span className="cart-title" title={title}>
                          {title}
                        </span>
                        <strong>{hqPrice}</strong>
                      </div>
                      <ShopButton
                        onClick={() => {
                          removeComicsToCart(cart);
                        }}
                      >
                        <Trash />
                      </ShopButton>
                    </div>
                  </CartContainer>
                );
              })
            ) : (
              <p className="empty-cart">Seu carrinho está vazio!</p>
            )}
          </ScrollArea>
          {!cartIsEmpty && (
            <Contentfooter>
              <ShopButton onClick={formik.handleSubmit}>
                <span>Finalizar compra</span>
              </ShopButton>
              <strong>{sumTotal}</strong>
            </Contentfooter>
          )}
        </Content>
      </CartFormSeparate>
    </CartFormContainer>
  );
}

export default CartForm;
