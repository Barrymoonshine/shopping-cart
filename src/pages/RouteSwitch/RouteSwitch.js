import './RouteSwitch.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import Home from '..//Home/Home';
import Products from '../Products/Products';
import Cart from '../../components/Cart/Cart';
import NotFound from '../../components/NotFound/NotFound';
import homeIcon from '../../images/home-icon.png';
import cheeseIcon from '../../images/cheese-icon.png';
import cartIcon from '../../images/cart-icon.png';

const RouteSwitch = () => {
  const { totalCartItems, toggleCartVisibility, isCartVisible } = useShop();

  return (
    <>
      <div className='header'>
        <div className='left-header'>
          <div className='shop-title'>The Smelly Cheese Co.</div>
        </div>
        <nav>
          <ul className='right-nav'>
            <li>
              <NavLink to='./' style={{ textDecoration: 'none' }}>
                <div className='nav-links'>
                  <img className='nav-icons' src={homeIcon} alt='Home' />
                  Home
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='./Products/Products'
                style={{ textDecoration: 'none' }}
              >
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
                  <img className='cart-button-icon' src={cartIcon} alt='Cart' />
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
        <Route path='/Products/Products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
