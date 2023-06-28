import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import RouteSwitch from './components/RouteSwitch/RouteSwitch';

const App = () => {
  return (
    <>
      <CartProvider>
        <RouteSwitch />
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
