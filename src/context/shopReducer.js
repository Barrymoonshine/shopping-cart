import ACTIONS from '../utils/ACTIONS';
import uniqid from 'uniqid';
import brieImg from '../images/brie.jpg';
import camembertImg from '../images/camembert.jpg';
import gorgonzolaImg from '../images/gorgonzola.jpg';
import langresImg from '../images/langres.jpg';
import parmesanImg from '../images/parmesan.jpg';
import roquefortImg from '../images/roquefort.jpg';
import stiltonImg from '../images/stilton.jpg';
import stinkingBishopImg from '../images/stinking-bishop.jpg';
import taleggioImg from '../images/taleggio.jpg';
import morbierImg from '../images/morbier.jpg';
import helpers from '../helpers/helpers.js';

export const initialState = {
  products: [
    {
      productName: 'Brie',
      imgSrc: brieImg,
      price: '2.80',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Camembert',
      imgSrc: camembertImg,
      price: '2.40',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Gorgonloza',
      imgSrc: gorgonzolaImg,
      price: '3.40',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Langres',
      imgSrc: langresImg,
      price: '7.50',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Parmesan',
      imgSrc: parmesanImg,
      price: '4.75',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Roquefort',
      imgSrc: roquefortImg,
      price: '3.20',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Stilton',
      imgSrc: stiltonImg,
      price: '3.70',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Stinking Bishop',
      imgSrc: stinkingBishopImg,
      price: '5.40',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Taleggio',
      imgSrc: taleggioImg,
      price: '6.30',
      quantity: 1,
      id: uniqid(),
    },
    {
      productName: 'Morbier',
      imgSrc: morbierImg,
      price: '7.15',
      quantity: 1,
      id: uniqid(),
    },
  ],
  cart: [],
  totalCartItems: false,
  totalCartCost: 0,
  isCartVisible: false,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_NEW_PROD_TO_CART:
      return {
        ...state,
        cart: payload.newCart,
      };
    case ACTIONS.INCREASE_CART_QUANTITY:
      return {
        ...state,
        cart: payload.newCart,
      };
    case ACTIONS.UPDATE_CART:
      return {
        ...state,
        cart: payload.newCart,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload.newCart,
      };
    case ACTIONS.CALC_TOTAL_CART_ITEMS:
      const newTotalItems = payload.newCart.reduce(
        (acc, curr) => acc + curr.quantity,
        false
      );
      return {
        ...state,
        totalCartItems: newTotalItems,
      };
    case ACTIONS.CALC_TOTAL_CART_COST:
      const newTotalCost = payload.newCart
        .reduce((acc, curr) => acc + parseFloat(curr.totalCost), 0)
        .toFixed(2);
      return {
        ...state,
        totalCartCost: newTotalCost,
      };
    case ACTIONS.TOGGLE_CART_VISIBILITY:
      const cartVisibility = state.isCartVisible ? false : true;
      return {
        ...state,
        isCartVisible: cartVisibility,
      };
    case ACTIONS.UPDATE_PROD_QUANTITY:
      const newProdQuantity = state.products.map((product) => {
        if (product.productName === payload.productName) {
          const newQuantity = helpers.getNewValue(
            payload.operand,
            product.quantity
          );
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      return {
        ...state,
        products: newProdQuantity,
      };
    default:
      return state;
  }
};

export default shopReducer;
