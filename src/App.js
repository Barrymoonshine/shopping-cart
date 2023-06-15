import './App.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import homeIcon from './images/home-icon.png';
import cheeseIcon from './images/cheese-icon.png';
import cartIcon from './images/cart-icon.png';
import uniqid from 'uniqid';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisibility] = useState(false);

  const getRoundedInt = (num) => num.toFixed(2);

  const getInt = (price) => {
    const int = parseFloat(price.slice(1));
    const int2Dp = getRoundedInt(int);
    return int2Dp;
  };

  const addToCart = (productNameInput, quantityInput, priceInput, imgSrc) => {
    const priceInteger = getInt(priceInput);
    const cost = quantityInput * priceInteger;
    const newProduct = {
      productName: productNameInput,
      quantity: quantityInput,
      price: priceInput,
      totalCost: cost,
      productImg: imgSrc,
      id: uniqid(),
    };
    const newCart = [...cart, newProduct];
    setCart(newCart);
  };

  const toggleCartVisibility = () => {
    setCartVisibility((prevState) => (prevState = !prevState));
  };

  const getMinValue = (productQuantity) =>
    productQuantity === 0 ? 0 : productQuantity - 1;

  const getNewValue = (operand, quantity) =>
    operand === '+' ? quantity + 1 : getMinValue(quantity);

  const updateCartQuantity = (operand, id, productPrice) => {
    const updatedArray = cart.map((product) => {
      if (product.id === id) {
        const newQuantity = getNewValue(operand, product.quantity);
        const price = getInt(productPrice);
        const cost = newQuantity * price;
        const newCostInt = getRoundedInt(cost);
        return { ...product, quantity: newQuantity, totalCost: newCostInt };
      }
      return product;
    });
    setCart(updatedArray);
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
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {isCartVisible && (
        <Cart cart={cart} updateCartQuantity={updateCartQuantity} />
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
