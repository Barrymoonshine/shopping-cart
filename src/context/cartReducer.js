import uniqid from 'uniqid';

export const initialState = {
  cart: [],
};

const newCartProd = (productNameInput, quantityInput, priceInput, imgSrc) => {
  const cost = (quantityInput * parseFloat(priceInput)).toFixed(2);
  const newProduct = {
    productName: productNameInput,
    quantity: quantityInput,
    price: priceInput,
    totalCost: cost,
    productImg: imgSrc,
    id: uniqid(),
  };
  return newProduct;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('cartReducer addToCart called');
      return {
        ...state.cart,
        cart: [
          ...state.cart,
          newCartProd(
            action.payload.productNameInput,
            action.payload.quantityInput,
            action.payload.priceInput,
            action.payload.imgSrc
          ),
        ],
      };
    case 'UPDATE_CART':
      const updatedArray = state.cart.map((product) => {
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
        cart: updatedArray,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state.cart,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
