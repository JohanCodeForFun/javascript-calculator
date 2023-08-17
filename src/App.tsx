import { useState } from "react";
import Display from "./components/Display";
import Digits from "./components/Digits";
import Operations from "./components/Operations";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(0);
  const [digits, setDigits] = useState(12345);
  const [operation, setOperation] = useState(null);

  return (
    <>
      <h1>JavaScript Calculator</h1>
      <div className="calculator-body">
        <div className="calculator-grid">
          <Display
            display={display}
            showOperation={operation}
          />
          <Digits
            currentDigits={display}
            onChangeDigits={setDisplay}
            />
          <Operations
            currentDigits={display}
            onChangeOperations={setDisplay}
            clearDisplay={setDisplay}
          />
        </div>
      </div>
    </>
  );
}

export default App;
