import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ACTIONS from '../utils/ACTIONS';
import uniqid from 'uniqid';
import Helpers from '../helpers/Helpers';

const useShopDispatch = () => {
  const { state, dispatch } = useContext(ShopContext);

  const updateTotalCartCalcs = (newCart) => {
    dispatch({
      type: ACTIONS.CALC_TOTAL_CART_COST,
      payload: { newCart },
    });
    dispatch({
      type: ACTIONS.CALC_TOTAL_CART_ITEMS,
      payload: { newCart },
    });
  };

  const increaseCartQuantity = (newCart) => {
    dispatch({
      type: ACTIONS.INCREASE_CART_QUANTITY,
      payload: { newCart },
    });
  };

  const addNewProdToCart = (newCart) => {
    dispatch({
      type: ACTIONS.ADD_NEW_PROD_TO_CART,
      payload: { newCart },
    });
  };

  const handleAddToCart = (productName, quantity, price, imgSrc) => {
    const isProdInCart = state.cart.find(
      (product) => product.productName === productName
    );
    if (quantity !== 0 && isProdInCart) {
      const newCart = state.cart.map((product) => {
        if (product.productName === productName) {
          return {
            ...product,
            quantity: product.quantity + quantity,
            totalCost: (
              (product.quantity + quantity) *
              parseFloat(price)
            ).toFixed(2),
          };
        }
        return product;
      });
      increaseCartQuantity(newCart);
      updateTotalCartCalcs(newCart);
    } else if (quantity !== 0 && !isProdInCart) {
      const newCart = [
        ...state.cart,
        {
          productName,
          quantity,
          price,
          totalCost: (quantity * parseFloat(price)).toFixed(2),
          productImg: imgSrc,
          id: uniqid(),
        },
      ];
      addNewProdToCart(newCart);
      updateTotalCartCalcs(newCart);
    }
  };

  const removeFromCart = (newCart) => {
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: { newCart },
    });
  };

  const updateCart = (newCart) => {
    dispatch({
      type: ACTIONS.UPDATE_CART,
      payload: { newCart },
    });
  };

  const handleCartUpdate = (operand, id, productPrice, quantity) => {
    const newQuantity = Helpers.getNewQuantity(operand, quantity);
    if (newQuantity === 0) {
      const newCart = state.cart.filter((product) => product.id !== id);
      removeFromCart(newCart);
      updateTotalCartCalcs(newCart);
    } else {
      const newCart = state.cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: newQuantity,
            totalCost: (newQuantity * parseFloat(productPrice)).toFixed(2),
          };
        }
        return product;
      });
      updateCart(newCart);
      updateTotalCartCalcs(newCart);
    }
  };

  return {
    handleAddToCart,
    handleCartUpdate,
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
};

export default useShopDispatch;
