import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-title'>{props.productName}</div>
      <div className='product-image'>TBC</div>
      {props.productPrice}
      <button>Add to cart</button>
      <button>+ </button>
      Quantity
      <button>+ </button>
    </div>
  );
};

export default ProductCard;
