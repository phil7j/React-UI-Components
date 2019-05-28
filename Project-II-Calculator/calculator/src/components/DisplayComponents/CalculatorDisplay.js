import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
   return (
   <div className={props.displayStyle}>
        <h1 className={props.h1Style}>{props.text}</h1>
    </div>
   )
}

export default CalculatorDisplay