import './Cart.css';
import useShopState from '../../hooks/useShopState';
// import Helpers from '../../helpers/Helpers';

const Cart = () => {
  // Full list of methods and variables previously available via useShop
  // const {
  //   cart,
  //   isCartVisible,
  //   totalCartCost,
  //   toggleCartVisibility,
  //   removeFromCart,
  //   updateCart,
  //   updateTotalCartCalcs,
  // } = useShop();

  const { cart, isCartVisible, totalCartCost } = useShopState;

  // Function to move to new TBC custom hook
  // const handleCartUpdate = (operand, id, productPrice, quantity) => {
  //   const newQuantity = Helpers.getNewQuantity(operand, quantity);
  //   if (newQuantity === 0) {
  //     const newCart = cart.filter((product) => product.id !== id);
  //     removeFromCart(newCart);
  //     updateTotalCartCalcs(newCart);
  //   } else {
  //     const newCart = cart.map((product) => {
  //       if (product.id === id) {
  //         return {
  //           ...product,
  //           quantity: newQuantity,
  //           totalCost: (newQuantity * parseFloat(productPrice)).toFixed(2),
  //         };
  //       }
  //       return product;
  //     });
  //     updateCart(newCart);
  //     updateTotalCartCalcs(newCart);
  //   }
  // };

  return (
    <div>
      {isCartVisible && (
        <div className='cart-modal'>
          <div className='cart-content'>
            <div className='cart-first-line'>
              ITEMS IN YOUR CART
              <button
                className='close-cart-button'
                // onClick={toggleCartVisibility}
              >
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
                    <button
                      className='quantity-buttons'
                      // onClick={() =>
                      //   handleCartUpdate(
                      //     '-',
                      //     product.id,
                      //     product.price,
                      //     product.quantity
                      //   )
                      // }
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      className='quantity-buttons'
                      // onClick={() =>
                      //   handleCartUpdate(
                      //     '+',
                      //     product.id,
                      //     product.price,
                      //     product.quantity
                      //   )
                      // }
                    >
                      +
                    </button>
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
                <div> £{totalCartCost}</div>
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
