import './ProductsContainer.css';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsContainer = () => {
  const [products, setProductState] = useState([
    {
      productName: 'Product One',
      price: '£10',
    },
    {
      productName: 'Product Two',
      price: '£15.77',
    },
    {
      productName: 'Product Three',
      price: '£5.23',
    },
    {
      productName: 'Product Four',
      price: '£32.14',
    },
    {
      productName: 'Product Five',
      price: '£0.14',
    },
    {
      productName: 'Product Six',
      price: '£3.20',
    },
    {
      productName: 'Product Seven',
      price: '£7.00',
    },
    {
      productName: 'Product Eight',
      price: '£42.10',
    },
    {
      productName: 'Product Nine',
      price: '£11.11',
    },
  ]);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard
          key={product.productName}
          productName={product.productName}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
