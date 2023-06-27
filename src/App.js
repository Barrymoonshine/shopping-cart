import './App.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import Home from './components/Home/Home';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import homeIcon from './images/home-icon.png';
import cheeseIcon from './images/cheese-icon.png';
import cartIcon from './images/cart-icon.png';
import uniqid from 'uniqid';

const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  UPDATE_CART: 'update-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
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

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
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
    case ACTIONS.UPDATE_CART:
      console.log('update cart called ');
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
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state.cart,
        cart: [
          state.cart.filter((product) => product.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

const App = () => {
  const [isCartVisible, setCartVisibility] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(false);
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  useEffect(() => {
    const runningTotalCartItems = state.cart.reduce(
      (acc, curr) => acc + curr.quantity,
      false
    );
    setTotalCartItems(runningTotalCartItems);
  }, [state.cart]);

  const addToCart = (productNameInput, quantityInput, priceInput, imgSrc) => {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { productNameInput, quantityInput, priceInput, imgSrc },
    });
  };

  const toggleCartVisibility = () => {
    setCartVisibility((prevState) => (prevState = !prevState));
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

  return (
    <>
      <div className='header'>
        <div className='left-header'>
          <div className='shop-title'>The Smelly Cheese Co.</div>
        </div>
        <nav>
          <ul className='right-nav'>
            <li>
              <NavLink to='./'>
                <div className='nav-links'>
                  <img className='nav-icons' src={homeIcon} alt='Home' />
                  Home
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to='./components/ProductsContainer/ProductsContainer'>
                <div className='nav-links'>
                  <img className='nav-icons' src={cheeseIcon} alt='Products' />
                  Products
                </div>
              </NavLink>
            </li>
            <li>
              <div className='nav-links'>
                <button className='cart-button' onClick={toggleCartVisibility}>
                  <img className='nav-icons' src={cartIcon} alt='Cart' />
                  Cart
                </button>{' '}
                {totalCartItems && (
                  <div className='cart-total'>{totalCartItems}</div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {isCartVisible && (
        <Cart cart={state.cart} handleCartUpdate={handleCartUpdate} />
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/components/ProductsContainer/ProductsContainer'
          element={<ProductsContainer addToCart={addToCart} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
