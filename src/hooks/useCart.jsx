import { useContext } from "react";
import { CartContext } from "../contexts/Cart";

export const useCart = () => {
    const context = useContext(CartContext)

    return context
}