const ProductList = ({ key, name, quantity, completed, price }) => {
  console.log(name);

  return (
    <p>
      {name} - ${price} - Quantity: {quantity} - Completed:
      {completed ? "Yes" : "No"}
    </p>
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

