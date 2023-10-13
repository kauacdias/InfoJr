import './App.css';
import React, { useEffect } from 'react';
import { useState } from "react";


function App() {
  const [calculo, setCalculo] = useState("");
  const [result, setResult] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);


  const ops = ['/', '*', '+', '-', '.'];

  const updateCalculo = value => {
    if (
      (ops.includes(value) && calculo === '') ||
      (ops.includes(value) && ops.includes(calculo.slice(-1)) && value !== '-')
    ) {
      return;
    }
    

    setCalculo(calculo + value);

    if(!ops.includes(value)) {
      setResult(eval(calculo + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];
  
    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalculo(i.toString())} key={i}>{i}</button>
      )
    }
  
    return digits;
  }
  

  const calculate = () => {
    setCalculo(eval(calculo).toString());
  }

  const deleteLast = () => {
    if(calculo === '') {
        return;
    }

    const value = calculo.slice(0, -1);

    setCalculo(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
            {result ? <span>({result})</span> : '' }&nbsp;
            {calculo || "0"}
        </div>

        <div className="operators">
            <button onClick={() => updateCalculo('/')}>/</button>
            <button onClick={() => updateCalculo('*')}>*</button>
            <button onClick={() => updateCalculo('+')}>+</button>
            <button onClick={() => updateCalculo('-')}>-</button>

            <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
            { createDigits() }
            <button onClick={() => updateCalculo('.')}>.</button>
            
            <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
