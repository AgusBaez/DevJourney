import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleCounter}>+</button>
    </div>
  );
};

export default Counter;

