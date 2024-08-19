import React, { useContext } from 'react';
import CounterContext from '../context/CounterContext';
import '../App.css';

const CounterButtons = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
