import { useState } from "react";
import Button from './Button';


function Calculator(){
    const [displayValue, setDisplayValue]= useState('0');


    return(
        <div>
            <div>{displayValue}</div>
            {/*Aquí irán los botones de la calculadora */}
            <button value="1" onClick={()=>setDisplayValue(displayValue + '1')}/>
            <button value="+" onClick={()=>console.log('lógica para la suma')}/>
        </div>
    )
}

export default Calculator;