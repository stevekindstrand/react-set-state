import { useState } from "react";
import "./State.css";

export const State = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <p>Click count: {counter}</p>
    </div>
  );
};
