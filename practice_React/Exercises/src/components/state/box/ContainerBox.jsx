import Box from "./Box.jsx";
import "./GridBox.css";
const ContainerBox = ({ colors }) => {
  const boxes = [];
  for (let i = 0; i < colors.length; i++) {
    boxes.push(<Box colors={colors} />);
  }
  return <div className="GridBox">{boxes}</div>;
};

export default ContainerBox;

