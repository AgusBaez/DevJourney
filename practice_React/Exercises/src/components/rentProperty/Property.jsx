import "./PropertyStyle.css";
import PropTypes from "prop-types";

const Property = ({ name, price, rating }) => {
  return (
    <div className="div">
      <h3>{name}</h3>
      <h4>${price} a night</h4>
      <h5>⭐{rating}⭐</h5>
    </div>
  );
};

Property.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Property;

