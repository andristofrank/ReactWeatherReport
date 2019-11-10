import React from 'react';
import logo from './logo.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './App.css';
function App() {

  return (
    <div>
    <div className="App">
      <h2>Please Choose a city</h2>
      <SelectBox/>
     <DatePicker/>
     <TimePicker/>
     <DatePicker/>
     <TimePicker/>
     <button className="btn btn-success">Show Data</button>
    </div>

    </div>
  );
};

const SelectBox = ()=>(
    <select class="form-control w-70" value="1">
      <option value="1">Horsens</option>
      <option value="2">Aarhus</option>
      <option value="3">Copenhagen</option>
    </select>
);

export default App;
