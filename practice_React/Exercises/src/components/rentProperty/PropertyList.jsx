import Property from "./Property.jsx";
import PropTypes from "prop-types";
const PropertyList = ({ properties }) => {
  return (
    <>
      <h2>Property List</h2>
      {properties.map((prop) => {
        return <Property key={prop.id} {...prop} />;
      })}
    </>
  );
};

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default PropertyList;

