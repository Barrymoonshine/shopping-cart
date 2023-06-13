import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-title'>{props.name}</div>
      <div className='product-image'>Image-TBC</div>
      {props.productPrice}
      <button>Add to cart</button>
      <button>-</button>
      <div className='product-quantity'>{props.quantity}</div>
      <button onClick={() => props.incrementQuantity(props.name)}>+</button>
    </div>
  );
};

export default ProductCard;
