/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CartContext = createContext()

// Provider component
export const CartProvider = ({ children }) => {

  const [isCartActive, setIsCartActive] = useState(false)
  const [cartProducts, setCartProducts] = useState([])

  return (
    <CartContext.Provider 
    value={{ isCartActive, setIsCartActive, cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};