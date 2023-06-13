import './App.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <div>Fake Store</div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'active-nav' : '';
              }}
              to='./components/Home/Home'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'active-nav' : '';
              }}
              to='./components/ProductsContainer/ProductsContainer'
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? 'active-nav' : '';
              }}
              to='./components/Cart/Cart'
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/components/Home/Home' element={<Home />} />
        <Route
          path='/components/ProductsContainer/ProductsContainer'
          element={<ProductsContainer />}
        />
        <Route path='/components/Cart/Cart' element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
