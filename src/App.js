import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
            <Link to='./components/Home/Home'>Home</Link>
          </li>
          <li>
            <Link to='./components/ProductsContainer/ProductsContainer'>
              Products
            </Link>
          </li>
          <li>
            <Link to='./components/Cart/Cart'>Cart</Link>
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
