import ProductList from "./ProductList";

const Product = ({ data }) => {
  return (
    <>
      <h2>🛒 List of Products 🛒</h2>

      <ul>
        {data.map((cart) => (
          <ProductList
            key={cart.id}
            name={cart.name}
            quantity={cart.quantity}
            completed={cart.completed}
            price={cart.price}
            // {...cart}
          />
        ))}
      </ul>
    </>
  );
};

export default Product;

