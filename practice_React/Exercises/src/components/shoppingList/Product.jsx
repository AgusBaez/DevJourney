import ProductList from "./ProductList";

const Product = ({ data }) => {
  return (
    <>
      <h1>🛒 List of Products 🛒</h1>

      <ul>
        {data.map((cart) => (
          <ProductList
            key={cart.id}
            name={cart.name}
            quantity={cart.quantity}
            completed={cart.completed}
            price={cart.price}
          />
        ))}
      </ul>
    </>
  );
};

export default Product;

