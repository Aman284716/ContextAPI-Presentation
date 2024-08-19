import React from 'react';
import CounterProvider from './context/CounterProvider';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

const App = () => {
  return (
    <CounterProvider>
      <div className="App">
        <CounterDisplay />
        <CounterButtons /> {/* Button Component 1*/}
        <CounterButtons /> {/* Button Component 2*/}
        <CounterButtons /> {/* Button Component 3*/}
      </div>
    </CounterProvider>
  );
};

export default App;
