import './ProductsContainer.css';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsContainer = (props) => {
  const [products, setProductState] = useState([
    {
      productName: 'Product One',
      price: '£10',
      quantity: 0,
    },
    {
      productName: 'Product Two',
      price: '£15.77',
      quantity: 0,
    },
    {
      productName: 'Product Three',
      price: '£5.23',
      quantity: 0,
    },
    {
      productName: 'Product Four',
      price: '£32.14',
      quantity: 0,
    },
    {
      productName: 'Product Five',
      price: '£0.14',
      quantity: 0,
    },
    {
      productName: 'Product Six',
      price: '£3.20',
      quantity: 0,
    },
    {
      productName: 'Product Seven',
      price: '£7.00',
    },
    {
      productName: 'Product Eight',
      price: '£42.10',
      quantity: 0,
    },
    {
      productName: 'Product Nine',
      price: '£11.11',
      quantity: 0,
    },
  ]);

  const getMinValue = (productQuantity) => {
    return productQuantity === 0 ? 0 : productQuantity - 1;
  };

  const getNewValue = (operand, quantity) => {
    return operand === '+' ? quantity + 1 : getMinValue(quantity);
  };

  const updateQuantity = (operand, productName) => {
    const updatedArray = products.map((product) => {
      if (product.productName === productName) {
        const newQuantity = getNewValue(operand, product.quantity);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProductState(updatedArray);
  };

  const addToParentCart = (productName, quantity, price) => {
    props.addToCart(productName, quantity, price);
  };

  return (
    <>
      <h1>Products</h1>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard
            key={product.productName}
            name={product.productName}
            price={product.price}
            quantity={product.quantity}
            updateQuantity={updateQuantity}
            addToParentCart={addToParentCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
