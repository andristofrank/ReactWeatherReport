import React, { useState } from 'react';
import logo from './logo.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './App.css';
import dispatcher from './dispatcher';

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
    <select className="form-control w-70" value="1">
      <option value="Horsens">Horsens</option>
      <option value="Aarhus">Aarhus</option>
      <option value="Copenhagen">Copenhagen</option>
    </select>
);

export default dispatcher => model => (
  <App/>
);
