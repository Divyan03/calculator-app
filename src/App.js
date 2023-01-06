import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/","*", "-", "+", "."];

  const updateCalc = value => {
    if (ops.includes(value) && calc == '' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }
    if (!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
    setCalc(calc + value);
  }

  const clear = () => {
    setCalc("");
  }

  const backspace = () => {
    setCalc(calc.slice(0,-1));
  }

  const evaluate = () =>{
    setCalc(eval(calc).toString());
  }
  
  return (
    <div className="Calculator-grid">
      <div className="Output">
        <div className="lastOutput">{result || ""}</div>
        <div className="currentOutput">{calc || 0}</div>
      </div>
      <button className="span-two" onClick={clear}>AC</button>
      <button className="operations" onClick={backspace}>DEL</button>
      <button className="operations" onClick={() => updateCalc('/')}>÷</button>
      <button className="keypad" onClick={() => updateCalc('7')}>7</button>
      <button className="keypad" onClick={() => updateCalc('8')}>8</button>
      <button className="keypad" onClick={() => updateCalc('9')}>9</button>
      <button className="operations" onClick={() => updateCalc('*')}>x</button>
      <button className="keypad" onClick={() => updateCalc('4')}>4</button>
      <button className="keypad" onClick={() => updateCalc('5')}>5</button>
      <button className="keypad" onClick={() => updateCalc('6')}>6</button>
      <button className="operations" onClick={() => updateCalc('-')}>-</button>
      <button className="keypad" onClick={() => updateCalc('1')}>1</button>
      <button className="keypad" onClick={() => updateCalc('2')}>2</button>
      <button className="keypad" onClick={() => updateCalc('3')}>3</button>
      <button className="operations" onClick={() => updateCalc('+')}>+</button>
      <button className="keypad" onClick={() => updateCalc('0')}>0</button>
      <button className="keypad" onClick={() => updateCalc('.')}>.</button>
      <button className="span-two" onClick={evaluate}>=</button>
    </div>
  );
}

export default App;
