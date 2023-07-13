import './Products.css';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../../components/ProductCards/ProductCards';

const Products = () => {
  const {
    products,
    updateProdQuantity,
    cart,
    increaseCartQuantity,
    addNewProdToCart,
  } = useShop();

  const handleAddToCart = (
    productNameInput,
    quantityInput,
    priceInput,
    imgSrc
  ) => {
    const isProdInCart = cart.some(
      (product) => product.productName === productNameInput
    );
    if (quantityInput !== 0 && isProdInCart) {
      increaseCartQuantity(productNameInput, quantityInput, priceInput);
    } else if (quantityInput !== 0 && !isProdInCart) {
      addNewProdToCart(productNameInput, quantityInput, priceInput, imgSrc);
    }
  };

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
