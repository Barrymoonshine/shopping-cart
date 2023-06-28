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
      return {
        ...state,
        cart: action.payload.newCart,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload.newCart,
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
