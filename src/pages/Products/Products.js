import './Products.css';
import useShopState from '../../hooks/useShopState';
import useShopDispatch from '../../hooks/useShopDispatch';
import ProductCard from '../../components/ProductCards/ProductCards';

const Products = () => {
  const { products } = useShopState();
  const { updateProdQuantity, handleAddToCart } = useShopDispatch();

  return (
    <>
      <p className='products-title'>EXPLORE SMELLY CHEESE</p>
      <div className='products-container'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.productName}
            price={product.price}
            quantity={product.quantity}
            imgSrc={product.imgSrc}
            updateProdQuantity={updateProdQuantity}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
