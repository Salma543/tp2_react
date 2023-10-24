import React, { useState } from "react";
import "./My Components/Stylecomp3.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClear = () => {
    setExpression("");
    setResult(""); // Efface le champ de résultat
  };

  return (
    <div className="calculator">
      <h1>Calculatrice</h1>
      <div className="inputs">
        <input
          type="text"
          value={expression}
          onChange={(event) => setExpression(event.target.value)}
        />
        <input type="text" value={result} disabled />
      </div>
      <div className="buttons">
        <button onClick={() => setExpression(expression + "0")}>0</button>
        <button onClick={() => setExpression(expression + "1")}>1</button>
        <button onClick={() => setExpression(expression + "2")}>2</button>
        <button onClick={() => setExpression(expression + "3")}>3</button>
        <button onClick={() => setExpression(expression + "4")}>4</button>
        <button onClick={() => setExpression(expression + "5")}>5</button>
        <button onClick={() => setExpression(expression + "6")}>6</button>
        <button onClick={() => setExpression(expression + "7")}>7</button>
        <button onClick={() => setExpression(expression + "8")}>8</button>
        <button onClick={() => setExpression(expression + "9")}>9</button>
        <button onClick={() => setExpression(expression + "+")}>+</button>
        <button onClick={() => setExpression(expression + "-")}>-</button>
        <button onClick={() => setExpression(expression + "*")}>*</button>
        <button onClick={() => setExpression(expression + "/")}>/</button>
        <button onClick={() => setResult(eval(expression))}>=</button>
        <button onClick={handleClear}>Effacer</button>
      </div>
    </div>
  );
}

export default App;
