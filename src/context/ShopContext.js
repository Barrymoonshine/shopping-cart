import { createContext, useReducer, useContext } from 'react';
import shopReducer, { initialState } from './shopReducer';
import ACTIONS from '../utils/ACTIONS';

const ShopContext = createContext(initialState);
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const value = {
    products: state.products,
    cart: state.cart,
    totalCartItems: state.totalCartItems,
    totalCartCost: state.totalCartCost,
    isCartVisible: state.isCartVisible,
    addNewProdToCart: (newCart) =>
      dispatch({
        type: ACTIONS.ADD_NEW_PROD_TO_CART,
        payload: { newCart },
      }),
    increaseCartQuantity: (newCart) =>
      dispatch({
        type: ACTIONS.INCREASE_CART_QUANTITY,
        payload: { newCart },
      }),
    updateTotalCartCalcs: (newCart) => {
      dispatch({
        type: ACTIONS.CALC_TOTAL_CART_COST,
        payload: { newCart },
      });
      dispatch({
        type: ACTIONS.CALC_TOTAL_CART_ITEMS,
        payload: { newCart },
      });
    },
    removeFromCart: (newCart) =>
      dispatch({
        type: ACTIONS.REMOVE_FROM_CART,
        payload: { newCart },
      }),
    updateCart: (newCart) =>
      dispatch({
        type: ACTIONS.UPDATE_CART,
        payload: { newCart },
      }),
    toggleCartVisibility: () => {
      dispatch({ type: ACTIONS.TOGGLE_CART_VISIBILITY });
    },
    updateProdQuantity: (operand, productName) => {
      dispatch({
        type: ACTIONS.UPDATE_PROD_QUANTITY,
        payload: { operand, productName },
      });
    },
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
