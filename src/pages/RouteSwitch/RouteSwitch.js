import './RouteSwitch.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Home from '..//Home/Home';
import Products from '../Products/Products';
import Cart from '../../components/Cart/Cart';
import NotFound from '../../components/NotFound/NotFound';
import homeIcon from '../../images/home-icon.png';
import cheeseIcon from '../../images/cheese-icon.png';
import cartIcon from '../../images/cart-icon.png';

const RouteSwitch = () => {
  const { totalCartItems, toggleCartVisibility, isCartVisible } = useCart();

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
              <NavLink to='./pages/Products/Products'>
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
        <Route path='pages/Products/Products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
