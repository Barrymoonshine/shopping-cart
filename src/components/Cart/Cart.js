import './Cart.css';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const [displayCart, setDisplayCart] = useState(true);
  const [subTotal, setSubTotal] = useState(0);

  const cart = useCart().cart;

  const hideModal = () => {
    setDisplayCart(false);
  };

  useEffect(() => {
    const runningSubTotal = cart
      .reduce((acc, curr) => acc + parseFloat(curr.totalCost), 0)
      .toFixed(2);
    setSubTotal(runningSubTotal);
  }, [cart]);

  return (
    <div>
      {displayCart && (
        <div className='cart-modal'>
          <div className='cart-content'>
            <div className='cart-first-line'>
              ITEMS IN YOUR CART
              <button className='close-cart-button' onClick={hideModal}>
                &#10005;
              </button>
            </div>
            <div className='cart-items'>
              {cart.map((product) => (
                <div className='product-summary' key={product.id}>
                  <div className='product-img'>
                    <img
                      src={product.productImg}
                      className='product-imgs'
                      alt='Cheeses'
                      style={{ width: '100px', height: '100px' }}
                    />
                  </div>
                  <div className='product-name'>{product.productName}</div>
                  <div className='product-quantity-container'>
                    <button className='quantity-buttons'>+</button>
                    {product.quantity}
                    <button className='quantity-buttons'>-</button>
                  </div>
                  <div className='product-price'>£{product.price}</div>
                  <div className='product-cost'>
                    Total: £{product.totalCost}
                  </div>
                </div>
              ))}
            </div>
            <div className='cart-bottom'>
              <div className='subtotal'>
                <div>SUBTOTAL</div>
                <div> £{subTotal}</div>
              </div>
              <button className='checkout-button'>CHECKOUT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
