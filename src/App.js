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
};

const newCart = (productNameInput, quantityInput, priceInput, imgSrc) => {
  const cost = (quantityInput * parseFloat(priceInput)).toFixed(2);
  const newProduct = {
    productName: productNameInput,
    quantity: quantityInput,
    price: priceInput,
    totalCost: cost,
    productImg: imgSrc,
    id: uniqid(),
  };
  console.log(newProduct);
  return newProduct;
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      console.log(`state.cart func `, state.cart);
      return {
        ...state.cart,
        cart: [
          ...state.cart,
          newCart(
            action.payload.productNameInput,
            action.payload.quantityInput,
            action.payload.priceInput,
            action.payload.imgSrc
          ),
        ],
      };
    default:
      return state;
  }
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisibility] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(false);
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  console.log('state.cart main ', state.cart);

  useEffect(() => {
    const runningTotalCartItems = cart.reduce(
      (acc, curr) => acc + curr.quantity,
      false
    );
    setTotalCartItems(runningTotalCartItems);
  }, [cart]);

  const addToCart = (productNameInput, quantityInput, priceInput, imgSrc) => {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { productNameInput, quantityInput, priceInput, imgSrc },
    });
  };

  const toggleCartVisibility = () => {
    setCartVisibility((prevState) => (prevState = !prevState));
  };

  const updateCart = (id, productPrice, newQuantity) => {
    const updatedArray = cart.map((product) => {
      if (product.id === id) {
        const cost = (newQuantity * parseFloat(productPrice)).toFixed(2);
        return { ...product, quantity: newQuantity, totalCost: cost };
      }
      return product;
    });
    setCart(updatedArray);
  };

  const removeFromCart = (id) => {
    const updatedArray = cart.filter((product) => product.id !== id);
    setCart(updatedArray);
  };

  const getNewQuantity = (operand, quantity) =>
    operand === '+' ? quantity + 1 : quantity - 1;

  const handleCartUpdate = (operand, id, productPrice, quantity) => {
    const newQuantity = getNewQuantity(operand, quantity);
    newQuantity === 0
      ? removeFromCart(id)
      : updateCart(id, productPrice, newQuantity);
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
        <Cart cart={cart} handleCartUpdate={handleCartUpdate} />
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
