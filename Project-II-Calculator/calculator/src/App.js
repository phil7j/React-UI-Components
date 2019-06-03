import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay displayStyle="CalcDisplay" text="0" h1Style="h1Style"/>
      <div className="numContainer">
      <ActionButton buttonStyle="action-btn btn" text="clear"/>
      <NumberButton buttonStyle="operation-btn btn" text="/"/>
      <NumberButton buttonStyle="number-btn btn" text="7"/>
      <NumberButton buttonStyle="number-btn btn" text="8"/>
      <NumberButton buttonStyle="number-btn btn" text="9"/>
      <NumberButton buttonStyle="operation-btn btn" text="*"/>
      <NumberButton buttonStyle="number-btn btn" text="4"/>
      <NumberButton buttonStyle="number-btn btn" text="5"/>
      <NumberButton buttonStyle="number-btn btn" text="6"/>
      <NumberButton buttonStyle="operation-btn btn" text="-"/>
      <NumberButton buttonStyle="number-btn btn" text="1"/>
      <NumberButton buttonStyle="number-btn btn" text="2"/>
      <NumberButton buttonStyle="number-btn btn" text="3"/>
      <NumberButton buttonStyle="operation-btn btn" text="+"/>
      <ActionButton buttonStyle="action-btn btn" text="0"/>
      <NumberButton buttonStyle="operation-btn btn" text="="/>
      </div>
    </div>
  );
};

export default App;
