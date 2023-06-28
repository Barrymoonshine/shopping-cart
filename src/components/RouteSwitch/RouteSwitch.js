import React from 'react';
import './RouteSwitch.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import Cart from '../Cart/Cart';
import NotFound from '../NotFound/NotFound';
import homeIcon from '../../images/home-icon.png';
import cheeseIcon from '../../images/cheese-icon.png';
import cartIcon from '../../images/cart-icon.png';
import { useCart } from '../../context/CartContext';

const RouteSwitch = () => {
  const { totalCartItems, toggleCartVisibility, isCartVisible } = useCart();

  console.log('isCartVisible in RouteSwitch', isCartVisible);

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
                <button
                  className='cart-button'
                  onClick={() => toggleCartVisibility()}
                >
                  <img className='nav-icons' src={cartIcon} alt='Cart' />
                  Cart
                </button>
                {totalCartItems && (
                  <div className='cart-total'>{totalCartItems}</div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {isCartVisible && <Cart />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/components/ProductsContainer/ProductsContainer'
          element={<ProductsContainer />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
