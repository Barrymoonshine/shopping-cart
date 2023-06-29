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

export const initialState = {
  products: [
    {
      productName: 'Brie',
      imgSrc: brieImg,
      price: '2.80',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Camembert',
      imgSrc: camembertImg,
      price: '2.40',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Gorgonloza',
      imgSrc: gorgonzolaImg,
      price: '3.40',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Langres',
      imgSrc: langresImg,
      price: '7.50',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Parmesan',
      imgSrc: parmesanImg,
      price: '4.75',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Roquefort',
      imgSrc: roquefortImg,
      price: '3.20',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Stilton',
      imgSrc: stiltonImg,
      price: '3.70',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Stinking Bishop',
      imgSrc: stinkingBishopImg,
      price: '5.40',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Taleggio',
      imgSrc: taleggioImg,
      price: '6.30',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Morbier',
      imgSrc: morbierImg,
      price: '7.15',
      quantity: 0,
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
      return {
        ...state,
        totalCartItems: payload.newTotalItems,
      };
    case ACTIONS.CALC_TOTAL_CART_COST:
      return {
        ...state,
        totalCartCost: payload.newTotalCost,
      };
    case ACTIONS.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        isCartVisible: payload.cartVisibility,
      };
    case ACTIONS.UPDATE_PROD_QUANTITY:
      return {
        ...state,
        products: payload.newProdQuantity,
      };
    default:
      return state;
  }
};

export default shopReducer;
