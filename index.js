import React from "react";
import ReactDOM from "react-dom";
import ScaleText from "react-scale-text";

function App() {
  const [display, setDisplay] = React.useState("0");
  const [number1, setNumber1] = React.useState(null);
  const [number2, setNumber2] = React.useState(null);
  const [operator, setOperator] = React.useState(null)
  const [shouldResetDisplay, setShouldResetDisplay] = React.useState(false);

  function inputNumber(number) {
    if (display === "0" || shouldResetDisplay) {
      setDisplay (number);
      setShouldResetDisplay(false);
    } else {
    setDisplay (display + number);
  }
}

  function inputOperator(op) {
    const number = parseInt(display);
    setNumber1(number);
    setOperator(op);
    setShouldResetDisplay(true);
  }

  function calculate() {
    if (number1 === null || operator === null || shouldResetDisplay) return;

    const number2 = parseInt(display);
    let result;
    
    if (operator === "+") {
      result =  number1 + number2;
    } else (operator === "-") {
      result = number1 - number2;
    } if else (operator === "*") {
      result = number1 * number2;
    } else {
      result = number1 / number2;
    }
    setDisplay(String(result));
  }

  return (
    <div class="main">
      <div class="display">
        <ScaleText>
          <div class="text">{display}</div>
        </ScaleText>
      </div>
      <div class="keypad">
        <div class="input-keys">
          <div class="function-keys">
            <button>AC</button>
          </div>
          <div class="digit-keys">
            <button onClick={() => inputNumber("0")}>0</button>
            <button onClick={() => inputNumber("1")}>1</button>
            <button onClick={() => inputNumber("2")}>2</button>
            <button onClick={() => inputNumber("3")}>3</button>
            <button onClick={() => inputNumber("4")}>4</button>
            <button onClick={() => inputNumber("5")}>5</button>
            <button onClick={() => inputNumber("6")}>6</button>
            <button onClick={() => inputNumber("7")}>7</button>
            <button onClick={() => inputNumber("8")}>8</button>
            <button onClick={() => inputNumber("9")}>9</button>
          </div>
        </div>
        <div class="operator-keys">
          <button onClick={() => inputOperator("/")}>÷</button>
          <button onClick={() => inputOperator("x")}>×</button>
          <button onClick={() => inputOperator("-")}>−</button>
          <button onClick={() => inputOperator("+")}>+</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
