import { createContext, useReducer, useContext } from 'react';
import cartReducer, { initialState } from './cartReducer';
import ACTIONS from '../utils/ACTIONS';

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (productNameInput, quantityInput, priceInput, imgSrc) => {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { productNameInput, quantityInput, priceInput, imgSrc },
    });
  };

  const getNewQuantity = (operand, quantity) =>
    operand === '+' ? quantity + 1 : quantity - 1;

  const handleCartUpdate = (operand, id, productPrice, quantity) => {
    const newQuantity = getNewQuantity(operand, quantity);
    newQuantity === 0
      ? dispatch({
          type: ACTIONS.REMOVE_FROM_CART,
          payload: { id },
        })
      : dispatch({
          type: ACTIONS.UPDATE_CART,
          payload: { id, productPrice, newQuantity },
        });
  };

  const value = {
    cart: state.cart,
    addToCart,
    handleCartUpdate,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
