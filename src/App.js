import React, { useState } from 'react';
import logo from './logo.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
    <div className="App">
      <h2>Please Choose a city</h2>
      <SelectBox/>
      <h3>From: </h3>
      <DatePicker
        selected = {startDate}
        onChange = {date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <h3>To: </h3>
      <DatePicker
        selected = {startDate}
        onChange = {date => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
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
