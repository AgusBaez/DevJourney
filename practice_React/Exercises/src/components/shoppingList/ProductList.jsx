const ProductList = ({ name, quantity, completed, price }) => {
  const style = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <li style={style}>
      <p>
        {name} - ${price} - Quantity: {quantity} - Completed:
        {completed ? "Yes" : "No"}
      </p>
    </li>
  );
};

export default ProductList;

// <li
// style={{
//   color: cart.completed ? "grey" : "red",
//   textDecoration: cart.completed ? "line-through" : "none",
// }}
// key={cart.id}
// >

// </li>

