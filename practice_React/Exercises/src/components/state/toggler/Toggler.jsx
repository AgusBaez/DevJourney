import { useState } from "react";

const Toggler = () => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  };
  return (
    <div>
      <h1 style={{ fontSize: "5rem", cursor:'pointer'}} onClick={toggleState}>
        {state ? "😀" : "😞"}
      </h1>
    </div>
  );
};

export default Toggler;

