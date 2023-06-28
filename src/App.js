import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import { ShopProvider } from './context/ShopContext';
import RouteSwitch from './pages/RouteSwitch/RouteSwitch';

const App = () => {
  return (
    <>
      <ShopProvider>
        <RouteSwitch />
        <Footer />
      </ShopProvider>
    </>
  );
};

export default App;
