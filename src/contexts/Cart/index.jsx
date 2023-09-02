import { createContext, useState } from "react";
import P from "prop-types";
export const CartContext = createContext({
  cartComics: [],
  totalItems: 0,
  addComicsToCart:  () => {},
  removeComicsToCart:  () => {},
  setCartComics: () => {}
});

export const CartContextProvider = ({ children }) => {
  const [cartComics, setCartComics] = useState([]);
  const totalItems = cartComics.length;


  /**
   * Adicionar comics ao carrinho
   * @param {{}} comics 
   */
  const addComicsToCart  = (comics) =>{
    const updateCart = []
    updateCart.push(comics)
    const cart = [...cartComics,...updateCart]

    setCartComics(cart)
    const storageCart = JSON.stringify(cart)
    localStorage.setItem('cart', storageCart)
  }

   /**
   * Remove comics do carrinho
   * @param {{}} comics 
   */
  const removeComicsToCart  = (comics) =>{
   const filterCart = cartComics.filter(cart => cart.id !== comics.id)
   setCartComics(filterCart)
   const storageCart = JSON.stringify(filterCart)
    localStorage.setItem('cart', storageCart)
  }

  return (
    <CartContext.Provider value={{ cartComics, totalItems, addComicsToCart, removeComicsToCart, setCartComics }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: P.node.isRequired,
};
