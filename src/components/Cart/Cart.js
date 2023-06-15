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
            <button onClick={hideModal}>Close cart</button>
            {props.cart.map((item) => (
              <div key={item.productName}>
                <div>{item.productName}</div>
                <div>{item.quantity}</div>
                <div>{item.price}</div>
                <div>Total cost = £{item.totalCost}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
