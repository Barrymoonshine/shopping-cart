import { useState, useEffect } from 'react';
import './Cart.css';

const Cart = (props) => {
  const [displayCart, setDisplayCart] = useState(true);
  const [subTotal, setSubTotal] = useState(0);

  const hideModal = () => {
    setDisplayCart(false);
  };

  useEffect(() => {
    const runningSubTotal = props.cart
      .reduce((acc, curr) => acc + parseFloat(curr.totalCost), 0)
      .toFixed(2);
    setSubTotal(runningSubTotal);
  }, [props.cart]);

  return (
    <div>
      {displayCart && (
        <div className='cart-modal'>
          <div className='cart-content'>
            <div className='cart-first-line'>
              ITEMS IN YOUR CART
              <button onClick={hideModal}>&#10005;</button>
            </div>
            {props.cart.map((product) => (
              <div className='product-summary' key={product.id}>
                <div className='product-img'>
                  <img
                    src={product.productImg}
                    className='product-imgs'
                    alt='Cheeses'
                    style={{ width: '150px', height: '150px' }}
                  />
                </div>
                <div className='product-name'>{product.productName}</div>
                <div className='product-quantity'>
                  <button
                    className='quantity-buttons'
                    onClick={() =>
                      props.handleCartUpdate(
                        '+',
                        product.id,
                        product.price,
                        product.quantity
                      )
                    }
                  >
                    +
                  </button>
                  {product.quantity}
                  <button
                    className='quantity-buttons'
                    onClick={() =>
                      props.handleCartUpdate(
                        '-',
                        product.id,
                        product.price,
                        product.quantity
                      )
                    }
                  >
                    -
                  </button>
                </div>
                <div className='product-price'>£{product.price}</div>
                <div className='product-cost'>Total: £{product.totalCost}</div>
              </div>
            ))}
            <div>SUBTOTAL £{subTotal}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
