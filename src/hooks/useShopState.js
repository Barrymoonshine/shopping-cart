import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const useShopState = () => {
  const { state } = useContext(ShopContext);

  return {
    products: state.products,
    cart: state.cart,
    totalCartItems: state.totalCartItems,
    totalCartCost: state.totalCartCost,
    isCartVisible: state.isCartVisible,
  };
};

export default useShopState;
