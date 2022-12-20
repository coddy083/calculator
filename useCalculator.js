import { useState } from "react";

export const useCalculator = () => {
  const [input, setInput] = useState(0);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);
  const [isClickedEqual, setIsClickedEqual] = useState(false);

  const hasInput = !!input;

  const onPressNumber = (num) => {
    if (currentOperator && !isOperatorClicked) {
      setResult(input);
      setInput(num);
      setIsOperatorClicked(true);
    } else {
      setInput(($input) => ($input === 0 ? num : Number(`${$input}${num}`)));
    }
  };

  const onPressOperator = (operator) => {
    if (operator !== "=") {
      setCurrentOperator(operator);
      setIsOperatorClicked(false);
      setIsClickedEqual(false);
    } else {
      let finalResult = 0;
      const finalInput = isClickedEqual ? tempInput : input;
      const finalOperator = isClickedEqual ? tempOperator : currentOperator;
      switch (finalOperator) {
        case "+":
          finalResult = result + finalInput;
          break;
        case "-":
          finalResult = result - finalInput;
          break;
        case "*":
          finalResult = result * finalInput;
          break;
        case "/":
          finalResult = result / finalInput;
          break;
      }
      setResult(finalResult);
      setInput(finalResult);
      setIsClickedEqual(true);
      setTempInput(finalInput);
      setTempOperator(finalOperator);
    }
  };

  const onPressReset = () => {
    if (!hasInput) {
      setInput(0);
      setCurrentOperator(null);
      setResult(null);
      setTempInput(null);
      setTempOperator(null);
      setIsClickedEqual(false);
    } else {
      setInput(0);
    }
  };
  
  return {
    input,
    isOperatorClicked,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNumber,
    onPressOperator,
    onPressReset,
  }
};
