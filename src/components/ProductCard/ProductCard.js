import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-title'>{props.name}</div>
      <div className='product-image'>
        <img src={props.imgSrc} className='product-imgs' alt='Cheeses' />
      </div>
      <div className='product-price'>{props.price}</div>
      <button
        onClick={() =>
          props.addToParentCart(
            props.name,
            props.quantity,
            props.price,
            props.imgSrc
          )
        }
      >
        Add to cart
      </button>
      <button onClick={() => props.updateQuantity('-', props.name)}>-</button>
      <div className='product-quantity'>{props.quantity}</div>
      <button onClick={() => props.updateQuantity('+', props.name)}>+</button>
    </div>
  );
};

export default ProductCard;
