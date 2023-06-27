import './ProductsContainer.css';
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import brieImg from '../../images/brie.jpg';
import camembertImg from '../../images/camembert.jpg';
import gorgonzolaImg from '../../images/gorgonzola.jpg';
import langresImg from '../../images/langres.jpg';
import parmesanImg from '../../images/parmesan.jpg';
import roquefortImg from '../../images/roquefort.jpg';
import stiltonImg from '../../images/stilton.jpg';
import stinkingBishopImg from '../../images/stinking-bishop.jpg';
import taleggioImg from '../../images/taleggio.jpg';
import morbierImg from '../../images/morbier.jpg';
import uniqid from 'uniqid';
import { useCart } from '../../context/CartContext';

const ProductsContainer = (props) => {
  const [products, setProductState] = useState([
    {
      productName: 'Brie',
      imgSrc: brieImg,
      price: '2.80',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Camembert',
      imgSrc: camembertImg,
      price: '2.40',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Gorgonloza',
      imgSrc: gorgonzolaImg,
      price: '3.40',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Langres',
      imgSrc: langresImg,
      price: '7.50',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Parmesan',
      imgSrc: parmesanImg,
      price: '4.75',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Roquefort',
      imgSrc: roquefortImg,
      price: '3.20',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Stilton',
      imgSrc: stiltonImg,
      price: '3.70',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Stinking Bishop',
      imgSrc: stinkingBishopImg,
      price: '5.40',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Taleggio',
      imgSrc: taleggioImg,
      price: '6.30',
      quantity: 0,
      id: uniqid(),
    },
    {
      productName: 'Morbier',
      imgSrc: morbierImg,
      price: '7.15',
      quantity: 0,
      id: uniqid(),
    },
  ]);

  const getMinValue = (productQuantity) =>
    productQuantity === 0 ? 0 : productQuantity - 1;

  const getNewValue = (operand, quantity) =>
    operand === '+' ? quantity + 1 : getMinValue(quantity);

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

  const { addToCart } = useCart();

  const addToParentCart = (productName, quantity, price, imgSrc) => {
    console.log('addToParentCart called');
    addToCart(productName, quantity, price, imgSrc);
  };

  return (
    <>
      <p className='products-title'>EXPLORE SMELLY CHEESE</p>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            price={product.price}
            quantity={product.quantity}
            imgSrc={product.imgSrc}
            updateQuantity={updateQuantity}
            addToParentCart={addToParentCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;
