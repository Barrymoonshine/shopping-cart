import { createContext, useReducer, useContext } from 'react';
import cartReducer, { initialState } from './cartReducer';
import ACTIONS from '../utils/ACTIONS';
import uniqid from 'uniqid';

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const calcTotalCartItems = (newCart) => {
    const newTotal = newCart.reduce((acc, curr) => acc + curr.quantity, false);
    console.log('newTotal in context', newTotal);
    dispatch({
      type: ACTIONS.CALC_TOTAL_CART_ITEMS,
      payload: { newTotal },
    });
  };

  const addToCart = (productNameInput, quantityInput, priceInput, imgSrc) => {
    const cost = (quantityInput * parseFloat(priceInput)).toFixed(2);
    const newProduct = {
      productName: productNameInput,
      quantity: quantityInput,
      price: priceInput,
      totalCost: cost,
      productImg: imgSrc,
      id: uniqid(),
    };
    const newCart = [...state.cart, newProduct];
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { newCart },
    });
    calcTotalCartItems(newCart);
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
    totalCartItems: state.totalCartItems,
    addToCart,
    handleCartUpdate,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
