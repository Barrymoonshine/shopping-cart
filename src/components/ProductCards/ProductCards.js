import './ProductCards.css';

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={props.imgSrc} className='product-imgs' alt='Cheeses' />
      </div>
      <div className='name-price-container'>
        <div className='product-name'>{props.name}</div>
        <div className='product-price'>£{props.price}</div>
      </div>
      <div className='cart-details-container'>
        <div className='quantity-container'>
          <button
            className='quantity-buttons'
            onClick={() => props.updateProdQuantity('-', props.name)}
          >
            -
          </button>
          <div className='product-quantity'>{props.quantity}</div>
          <button
            className='quantity-buttons'
            onClick={() => props.updateProdQuantity('+', props.name)}
          >
            +
          </button>
        </div>
        <button
          className='add-to-cart-button'
          onClick={() =>
            props.addToCart(
              props.name,
              props.quantity,
              props.price,
              props.imgSrc
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
