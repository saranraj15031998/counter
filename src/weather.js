import React, { useState } from 'react';
import './weather.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className='counter-app'>
    <div className="counter">
      <h2>Counter App</h2>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
    </div>
  );
};

export default Counter;
