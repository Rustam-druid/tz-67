import React, { useState } from 'react';
import Counter from './containers/Counter/Counter.tsx';
import Calculator from './containers/Calculator/Calculator.tsx';

const App = () => {
  const [showCounter, setShowCounter] = useState(true);
  const [showCalculator, setShowCalculator] = useState(false);

  const handleCounterClick = () => {
    setShowCounter(true);
    setShowCalculator(false);
  };

  const handleCalculatorClick = () => {
    setShowCounter(false);
    setShowCalculator(true);
  };

  return (
    <>
      <button onClick={handleCounterClick}>Counter</button>
      <button onClick={handleCalculatorClick}>Calculator</button>

      {showCounter && <Counter />}
      {showCalculator && <Calculator />}
    </>
  );
};

export default App;
