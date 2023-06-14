const Cart = (props) => {
  return (
    <>
      {props.cart.map((item) => (
        <div key={item.productName}>
          <div>{item.productName}</div>
          <div>{item.quantity}</div>
          <div>{item.price}</div>
          <div>Total cost = {item.totalCost}</div>
        </div>
      ))}
    </>
  );
};

export default Cart;
