import { createContext, useReducer, useContext } from 'react';
import cartReducer, { initialState } from './cartReducer';
import ACTIONS from '../utils/ACTIONS';
import uniqid from 'uniqid';

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const calcTotalCartCost = (newCart) => {
    const newTotalCost = newCart
      .reduce((acc, curr) => acc + parseFloat(curr.totalCost), 0)
      .toFixed(2);
    dispatch({
      type: ACTIONS.CALC_TOTAL_CART_COST,
      payload: { newTotalCost },
    });
  };

  const toggleCartVisibility = () => {
    console.log('toggleCartVisibility called');
    const cartVisibility = (state.isCartVisible = !state.isCartVisible);
    console.log(`cartVisibility: ${cartVisibility}`);
    dispatch({
      type: ACTIONS.TOGGLE_CART_VISIBILITY,
      payload: { cartVisibility },
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
    totalCartCost: state.totalCartCost,
    isCartVisible: state.isCartVisible,
    addToCart,
    handleCartUpdate,
    toggleCartVisibility,
    calcTotalCartCost,
    calcTotalCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
