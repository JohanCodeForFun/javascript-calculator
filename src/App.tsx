import { useState } from "react";
import Display from "./components/Display";
import Digits from "./components/Digits";
import Operations from "./components/Operations";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(12345);

  return (
    <>
      <h1>JavaScript Calculator</h1>
      <div className="calculator-body">
        <div className="calculator-grid">
          <Display display={display} />
          <Digits />
          <Operations />
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
