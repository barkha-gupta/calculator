import { useState } from 'react';
import './App.css';

function App() {
  const[input, setInput]= useState("");
  
  function clear()
  {
    setInput(input => "")
  }
  function handleSubmit()
  {
    let result= eval(input);
    console.log(result)
    setInput(result)
  }
  function changeInput(str)
  {
    setInput(input => input+=str)
  }
  return (
    <div className="App">
      <div className='main-container'>
        <div>
          <h1>Calculator</h1>
        </div>
        <div className='container'>
         

            <div className='input-container'>
              <input value={input} name="calc" placeholder='calculate'></input>
              <button onClick={clear}>C</button>
            </div>

            <div className='row'>
              <button onClick={()=> changeInput("1")}>1</button>
              <button onClick={()=> changeInput("2")}>2</button>
              <button onClick={()=> changeInput("3")}>3</button>
              <button onClick={()=> changeInput("/")}>/</button>
            </div>

            <div className='row'>
              <button onClick={()=> changeInput("4")}>4</button>
              <button onClick={()=> changeInput("5")}>5</button>
              <button onClick={()=> changeInput("6")}>6</button>
              <button onClick={()=> changeInput("-")}>-</button>
            </div>

            <div className='row'>
              <button onClick={()=> changeInput("7")}>7</button>
              <button onClick={()=> changeInput("8")}>8</button>
              <button onClick={()=> changeInput("9")}>9</button>
              <button onClick={()=> changeInput("+")}>+</button>
            </div>

            <div className='row'>
              <button onClick={()=> changeInput(".")}>.</button>
              <button onClick={()=> changeInput("0")}>0</button>
              <button type='submit' onClick={()=> handleSubmit(input)}>=</button>
              <button onClick={()=> changeInput("*")}>*</button>
            </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;
