import { useReducer } from 'react';
import shopReducer, { initialState } from '../state/shopReducer';

const useShop = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useShop;
