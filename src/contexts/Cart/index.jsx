import { createContext, useState } from "react";
import P from "prop-types";
export const CartContext = createContext({
  cartComics: [],
  totalItems: 0,
  addComicsToCart:  () => {},
  removeComicsToCart:  () => {}
});

export const CartContextProvider = ({ children }) => {
  const [cartComics, setCartComics] = useState([]);
  const totalItems = cartComics.length;
 console.log("carrinho:",cartComics)
 
 /**
   * Adicionar comics ao carrinho da localStorage
   * @param {{}} comics 
   */
 const addComicsToStorageCart  = (storageComics) =>{
    const updateStorageCart = []
    updateStorageCart.push(storageComics)
    const storageCart = JSON.stringify(updateStorageCart)
    localStorage.setItem('cart', storageCart)
  }

  /**
   * Adicionar comics ao carrinho
   * @param {{}} comics 
   */
  const addComicsToCart  = (comics) =>{
    const updateCart = []
    updateCart.push(comics)
    setCartComics([...cartComics,...updateCart])
    addComicsToStorageCart(comics)
  }

   /**
   * Remove comics do carrinho
   * @param {{}} comics 
   */
  const removeComicsToCart  = (comics) =>{
   const filterCart = cartComics.filter(cart => cart.id !== comics.id)
   setCartComics(filterCart)
  }

  return (
    <CartContext.Provider value={{ cartComics, totalItems, addComicsToCart, removeComicsToCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: P.node.isRequired,
};
