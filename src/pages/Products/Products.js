import './Products.css';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../../components/ProductCards/ProductCards';
import uniqid from 'uniqid';

const Products = () => {
  const {
    products,
    updateProdQuantity,
    increaseCartQuantity,
    addNewProdToCart,
    cart,
    updateTotalCartCalcs,
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
      const newCart = cart.map((product) => {
        if (product.productName === productNameInput) {
          const newQuantity = product.quantity + quantityInput;
          const newCost = (newQuantity * parseFloat(priceInput)).toFixed(2);
          return {
            ...product,
            quantity: newQuantity,
            totalCost: newCost,
          };
        }
        return product;
      });
      increaseCartQuantity(newCart);
      updateTotalCartCalcs(newCart);
    } else if (quantityInput !== 0 && !isProdInCart) {
      const newProduct = {
        productName: productNameInput,
        quantity: quantityInput,
        price: priceInput,
        totalCost: (quantityInput * parseFloat(priceInput)).toFixed(2),
        productImg: imgSrc,
        id: uniqid(),
      };
      const newCart = [...cart, newProduct];
      addNewProdToCart(newCart);
      updateTotalCartCalcs(newCart);
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
