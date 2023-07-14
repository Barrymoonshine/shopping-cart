import './Products.css';
import useShopState from '../../hooks/useShopState';
import ProductCard from '../../components/ProductCards/ProductCards';
// import uniqid from 'uniqid';

const Products = () => {
  // Full list of methods and variables previously available via useShop
  // const {
  //   products,
  //   updateProdQuantity,
  //   increaseCartQuantity,
  //   addNewProdToCart,
  //   cart,
  //   updateTotalCartCalcs,
  // } = useShop();

  const { products } = useShopState();

  // Function to be move to new TBC hook
  // const handleAddToCart = (productName, quantity, price, imgSrc) => {
  //   const isProdInCart = cart.find(
  //     (product) => product.productName === productName
  //   );

  //   if (quantity !== 0 && isProdInCart) {
  //     const newCart = cart.map((product) => {
  //       if (product.productName === productName) {
  //         return {
  //           ...product,
  //           quantity: product.quantity + quantity,
  //           totalCost: (
  //             (product.quantity + quantity) *
  //             parseFloat(price)
  //           ).toFixed(2),
  //         };
  //       }
  //       return product;
  //     });
  //     increaseCartQuantity(newCart);
  //     updateTotalCartCalcs(newCart);
  //   } else if (quantity !== 0 && !isProdInCart) {
  //     const newCart = [
  //       ...cart,
  //       {
  //         productName,
  //         quantity,
  //         price,
  //         totalCost: (quantity * parseFloat(price)).toFixed(2),
  //         productImg: imgSrc,
  //         id: uniqid(),
  //       },
  //     ];
  //     addNewProdToCart(newCart);
  //     updateTotalCartCalcs(newCart);
  //   }
  // };

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
            // updateProdQuantity={updateProdQuantity} functions to come from new TBC hook
            // handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
