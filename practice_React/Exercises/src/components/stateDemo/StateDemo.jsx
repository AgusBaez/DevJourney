import { useState } from "react";

const StateDemo = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Actual Count {count}</h3>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default StateDemo;

