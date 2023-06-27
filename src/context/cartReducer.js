import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  cart: [],
  totalCartItems: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      console.log('action.payload.newCart', action.payload.newCart);
      console.log('state', { ...state });
      console.log('state.cart', state.cart);
      return {
        ...state,
        cart: action.payload.newCart,
      };

    case ACTIONS.UPDATE_CART:
      const updatedProd = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          const cost = (
            action.payload.newQuantity * parseFloat(action.payload.productPrice)
          ).toFixed(2);
          return {
            ...product,
            quantity: action.payload.newQuantity,
            totalCost: cost,
          };
        }
        return product;
      });
      return {
        ...state.cart,
        cart: updatedProd,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state.cart,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case ACTIONS.CALC_TOTAL_CART_ITEMS:
      return {
        ...state.totalCartItems,
        totalCartItems: action.payload.newTotal,
      };
    default:
      return state;
  }
};

export default cartReducer;
