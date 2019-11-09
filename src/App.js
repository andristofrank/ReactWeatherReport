import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
   Please Choose a city
    </div>
    <SelectBox/>
    </div>
  );
};

const SelectBox = ()=>(
    <select value="1">
      <option value="1">Horsens</option>
      <option value="2">Aarhus</option>
      <option value="3">Copenhagen</option>
    </select>
);

export default App;
