import './App.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productNameInput, quantityInput, priceInput) => {
    const cost = quantityInput * priceInput;
    const newProduct = {
      productName: productNameInput,
      quantity: quantityInput,
      price: priceInput,
      totalCost: cost,
    };
    const newCart = [...cart, newProduct];
    setCart(newCart);
  };

  return (
    <>
      <div>Fake Store</div>
      <nav>
        <ul>
          <li>
            <NavLink to='./'>Home</NavLink>
          </li>
          <li>
            <NavLink to='./components/ProductsContainer/ProductsContainer'>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='./components/Cart/Cart'>Cart</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/components/ProductsContainer/ProductsContainer'
          element={<ProductsContainer addToCart={addToCart} />}
        />
        <Route path='/components/Cart/Cart' element={<Cart cart={cart} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
