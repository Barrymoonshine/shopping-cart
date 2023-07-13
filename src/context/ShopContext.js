import { createContext, useReducer, useContext } from 'react';
import shopReducer, { initialState } from './shopReducer';
import ACTIONS from '../utils/ACTIONS';
import uniqid from 'uniqid';
import helpers from '../helpers/helpers.js';

const ShopContext = createContext(initialState);
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const calcTotalCartCost = (newCart) => {
    const newTotalCost = newCart
      .reduce((acc, curr) => acc + parseFloat(curr.totalCost), 0)
      .toFixed(2);
    dispatch({
      type: ACTIONS.CALC_TOTAL_CART_COST,
      payload: { newTotalCost },
    });
  };

  const calcTotalCartItems = (newCart) => {
    const newTotalItems = newCart.reduce(
      (acc, curr) => acc + curr.quantity,
      false
    );
    dispatch({
      type: ACTIONS.CALC_TOTAL_CART_ITEMS,
      payload: { newTotalItems },
    });
  };

  const updateTotalCartCalcs = (newCart) => {
    calcTotalCartItems(newCart);
    calcTotalCartCost(newCart);
  };

  const addNewProdToCart = (
    productNameInput,
    quantityInput,
    priceInput,
    imgSrc
  ) => {
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
      type: ACTIONS.ADD_NEW_PROD_TO_CART,
      payload: { newCart },
    });
    updateTotalCartCalcs(newCart);
  };

  const increaseCartQuantity = (
    productNameInput,
    quantityInput,
    priceInput
  ) => {
    const newCart = state.cart.map((product) => {
      if (product.productName === productNameInput) {
        const newQuantity = product.quantity + quantityInput;
        const newCost = (newQuantity * parseFloat(priceInput)).toFixed(2);
        return {
          ...product,
          quantity: newQuantity,
          totalCost: newCost,
        };
      }
      return product;
    });
    dispatch({
      type: ACTIONS.INCREASE_CART_QUANTITY,
      payload: { newCart },
    });
    updateTotalCartCalcs(newCart);
  };

  const handleAddToCart = (
    productNameInput,
    quantityInput,
    priceInput,
    imgSrc
  ) => {
    const isProdInCart = state.cart.some(
      (product) => product.productName === productNameInput
    );
    if (quantityInput !== 0 && isProdInCart) {
      increaseCartQuantity(productNameInput, quantityInput, priceInput);
    } else if (quantityInput !== 0 && !isProdInCart) {
      addNewProdToCart(productNameInput, quantityInput, priceInput, imgSrc);
    }
  };

  const updateCart = (id, productPrice, newQuantity) => {
    const newCart = state.cart.map((product) => {
      if (product.id === id) {
        const cost = (newQuantity * parseFloat(productPrice)).toFixed(2);
        return {
          ...product,
          quantity: newQuantity,
          totalCost: cost,
        };
      }
      return product;
    });
    dispatch({
      type: ACTIONS.UPDATE_CART,
      payload: { newCart },
    });
    updateTotalCartCalcs(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = state.cart.filter((product) => product.id !== id);
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART,
      payload: { newCart },
    });
    updateTotalCartCalcs(newCart);
  };

  const handleCartUpdate = (operand, id, productPrice, quantity) => {
    const newQuantity = helpers.getNewQuantity(operand, quantity);
    newQuantity === 0
      ? removeFromCart(id)
      : updateCart(id, productPrice, newQuantity);
  };

  const updateProdQuantity = (operand, productName) => {
    const newProdQuantity = state.products.map((product) => {
      if (product.productName === productName) {
        const newQuantity = helpers.getNewValue(operand, product.quantity);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    dispatch({
      type: ACTIONS.UPDATE_PROD_QUANTITY,
      payload: { newProdQuantity },
    });
  };

  const value = {
    products: state.products,
    cart: state.cart,
    totalCartItems: state.totalCartItems,
    totalCartCost: state.totalCartCost,
    isCartVisible: state.isCartVisible,
    handleAddToCart,
    handleCartUpdate,
    toggleCartVisibility: () => {
      dispatch({ type: ACTIONS.TOGGLE_CART_VISIBILITY });
    },
    updateProdQuantity,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
