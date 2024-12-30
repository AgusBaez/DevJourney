import { useState } from "react";

const ContainerBox = ({ colors }) => {
  function randomIdx() {
    const num = Math.floor(Math.random() * colors.length);
    return num;
  }

  const [actualColor, setActualColor] = useState(colors[randomIdx()]);

  const handleColor = () => {
    setActualColor(colors[randomIdx()]);
  };

  return (
    <div>
      <ul>
        <button
          onClick={handleColor}
          style={{
            backgroundColor: actualColor,
            height: "200px",
            width: "200px",
            borderRadius: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "4rem",
          }}
        ></button>
      </ul>
    </div>
  );
};

export default ContainerBox;

