import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  cart: [],
  totalCartItems: false,
  totalCartCost: 0,
  isCartVisible: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
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
        ...state,
        cart: updatedProd,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case ACTIONS.CALC_TOTAL_CART_ITEMS:
      return {
        ...state,
        totalCartItems: action.payload.newTotalItems,
      };
    case ACTIONS.CALC_TOTAL_CART_COST:
      return {
        ...state,
        totalCartCost: action.payload.newTotalCost,
      };
    case ACTIONS.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        isCartVisible: action.payload.cartVisibility,
      };
    default:
      return state;
  }
};

export default cartReducer;
