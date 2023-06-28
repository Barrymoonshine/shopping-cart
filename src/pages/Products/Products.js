import './Products.css';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../../components/ProductCards/ProductCards';

const Products = () => {
  const { products, updateProdQuantity, addToCart } = useShop();

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
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
