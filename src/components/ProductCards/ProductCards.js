import './ProductCards.css';

const ProductCard = (props) => {
  const { name, price, quantity, imgSrc, updateProdQuantity, addToCart } =
    props;
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={imgSrc} className='product-imgs' alt='Cheeses' />
      </div>
      <div className='name-price-container'>
        <div className='product-name'>{name}</div>
        <div className='product-price'>£{price}</div>
      </div>
      <div className='cart-details-container'>
        <div className='quantity-container'>
          <button
            className='quantity-buttons'
            onClick={() => {
              updateProdQuantity('-', name);
            }}
          >
            -
          </button>
          <div className='product-quantity'>{quantity}</div>
          <button
            className='quantity-buttons'
            onClick={() => {
              updateProdQuantity('+', name);
            }}
          >
            +
          </button>
        </div>
        <button
          className='add-to-cart-button'
          onClick={() => {
            addToCart(name, quantity, price, imgSrc);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
