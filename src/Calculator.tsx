import { useState } from 'react';
import Button from './Button';

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [firstOperand, setFirstOperand] = useState<number | null>(null);

  function handleNumberClick(value: string) {
    setDisplayValue(displayValue === "0" ? value : displayValue + value);
  }

  function handleOperationClick(newOperator: string) {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(displayValue));
      setOperator(newOperator);
      setDisplayValue("0");
    } else {
      calculate();
      setOperator(newOperator);
    }
  }

  function calculate() {
    if (firstOperand !== null && operator !== null) {
      const secondOperand = parseFloat(displayValue);
      switch (operator) {
        case '+':
          setDisplayValue((firstOperand + secondOperand).toString());
          break;
        case '-':
          setDisplayValue((firstOperand - secondOperand).toString());
          break;
        case '*':
          setDisplayValue((firstOperand * secondOperand).toString());
          break;
        case '/':
          if (secondOperand === 0) {
            setDisplayValue("Error");
          } else {
            setDisplayValue((firstOperand / secondOperand).toString());
          }
          break;
      }
      setFirstOperand(null);
      setOperator(null);
    }
  }

  return (
    <div>
      <div> {displayValue} </div>
      <Button value="1" onclick={() => handleNumberClick('1')} />{' '}
      <Button value="+" onclick={() => handleOperationClick('+')} />{' '}
    </div>
  );
}

export default Calculator;