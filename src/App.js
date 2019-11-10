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
      <h2>Please select a city</h2>
      <SelectBox/>
      <form className="form-inline">
        <div className="form-group mx-5">
          <label for="date-from">
            From:
          </label>
          <DatePicker
            id="date-from"
            className="form-control mx-3 mt-5"
            selected = {startDate}
            onChange = {date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <div className="form-group">
          <label for="date-to">
            To:
          </label>
          <DatePicker
            id="date-to"
            className="form-control mx-3 mt-5"
            selected = {startDate}
            onChange = {date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <button type="submit" className="btn btn-success mx-5 mt-3">Show Data</button>
      </form>
    </div>
    <div>
      <h4 className="mt-5">Weather History</h4>
      <TableComponent/>
    </div>
    </div>
  );
};

const SelectBox = ()=>(
    <select class="form-control w-70 mb-5" value="1">
      <option value="1">Horsens</option>
      <option value="2">Aarhus</option>
      <option value="3">Copenhagen</option>
    </select>
);

const TableComponent = () => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col"> # </th>
        <th scope="col"> Type </th>
        <th scope="col"> Value </th>
        <th scope="col"> Unit </th>
      </tr>
    </thead>
  </table>
);

export default App;
