import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  /* You will need some function to handle the key pressed and button events */
  
  function onA(event) {
    setA(event.target.value);
  
  }

  function onB(event) {
    setB(event.target.value)
  }

  function onCompute() {
    if (isNaN(a) || isNaN(b) || a === "" || b === "") {
      setResult("A and B shall be number")
    } else {
      
      setResult(Number(a) + Number(b))
    }

  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} value={a} />

      <label>B =</label>
      <input onChange={onB} value={b} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} disabled className={isNaN(result) ? "error" : ""}/>
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
