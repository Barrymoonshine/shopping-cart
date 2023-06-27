import { createContext, useReducer, useContext } from 'react';
import cartReducer, { initialState } from './cartReducer';

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (productNameInput, quantityInput, priceInput, imgSrc) => {
    console.log('cartProvider addToCart called');
    dispatch({
      type: 'ADD_TO_CART',
      payload: { productNameInput, quantityInput, priceInput, imgSrc },
    });
  };

  const value = {
    cart: state.cart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
