import { useState } from 'react';
import Button from './Button';
import './App.css'//importar el archivo css

function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>("0");
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

  function handleClearClick(){
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
}

  return (
    <div>
      <div className="calculator">
        {''}
        <div className='display'> {displayValue}</div>{''}
        <div>
          <Button value = "7" onClick={() => handleNumberClick('7')}/>
          <Button value = "4" onClick={() => handleNumberClick('4')}/>
          <Button value = "1" onClick={() => handleNumberClick('1')}/>
          <Button value = "0" onClick={() => handleNumberClick('0')}/>
        </div>
        <div>
        <Button value = "8" onClick={() => handleNumberClick('8')}/>
        <Button value = "5" onClick={() => handleNumberClick('5')}/>
        <Button value = "2" onClick={() => handleNumberClick('2')}/>
        <Button value = "=" onClick={calculate}/>
        </div>
        <div>
        <Button value = "9" onClick={() => handleNumberClick('9')}/>
        <Button value = "6" onClick={() => handleNumberClick('6')}/>
        <Button value = "3" onClick={() => handleNumberClick('3')}/>
        <Button value = "-" onClick={() => handleNumberClick('-')}/>
        </div>
        <div>
        <Button value = "C" onClick={handleClearClick}/>
        <Button value = "/" onClick={() => handleOperationClick('/')}/>
        <Button value = "*" onClick={() => handleOperationClick('*')}/>
        <Button value = "+" onClick={() => handleOperationClick('+')}/>
        </div>
      </div>
    </div>
  );
}

export default Calculator;