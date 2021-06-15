import { memo, useCallback, useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 100, 10, 9, 200]);
  const memoFindMax = useMemo(() => findMax(), [arr]);

  function findMax() {
    console.log("Find Max Computing...");
    return Math.max(...arr);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increase App Count
      </button>
      <p> The Max value is {memoFindMax}</p>
    </div>
  );
}
