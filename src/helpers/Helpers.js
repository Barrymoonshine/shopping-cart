const Helpers = (() => {
  const getNewQuantity = (operand, quantity) =>
    operand === '+' ? quantity + 1 : quantity - 1;

  const getMinValue = (productQuantity) =>
    productQuantity === 0 ? 0 : productQuantity - 1;

  const getNewValue = (operand, quantity) =>
    operand === '+' ? quantity + 1 : getMinValue(quantity);

  return {
    getNewQuantity,
    getNewValue,
  };
})();

export default Helpers;
