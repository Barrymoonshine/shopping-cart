import { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
  const [displayModel, setDisplayModal] = useState(true);

  const hideModal = () => {
    setDisplayModal(false);
  };

  return (
    <div>
      {displayModel && (
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
                      props.updateCartQuantity('+', product.id, product.price)
                    }
                  >
                    +
                  </button>
                  {product.quantity}
                  <button
                    className='quantity-buttons'
                    onClick={() =>
                      props.updateCartQuantity('-', product.id, product.price)
                    }
                  >
                    -
                  </button>
                </div>
                <div className='product-price'>{product.price}</div>
                <div className='product-cost'>Total: £{product.totalCost}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
