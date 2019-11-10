import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './App.css';

const App = ({model, dispatcher})=> {
  return (
    <div>
    <div className="App">
      <h2>Please select a city</h2>
      <SelectBox {...{model, dispatcher}}/>
      <DateTimeForm {...{model,dispatcher}}/>
      <div>
      <div className="data_shown">
      <TableComponentHistory {...model} />
      </div>
    </div>
    </div>
    
    </div>
  );
};

const DateTimeForm = (model,dispatcher)=>(
  <form className="form-inline">
  <div className="form-group mx-5">
    <label htmlFor="date-from">
      From:
    </label>
    <DatePicker
      id="date-from"
      className="form-control mx-3 mt-5"
      showTimeSelect
      onChange={dateFrom => dispatcher()({type:'getByDateFrom',dateFrom})}
      startDate={model.DateFrom}
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  </div>
  <div className="form-group">
    <label htmlFor="date-to">
      To:
    </label>
    <DatePicker
      id="date-to"
      className="form-control mx-3 mt-5"
      showTimeSelect
      onChange={dateTo => dispatcher()({type:'getByDateTo',dateTo})}
      startDate={model.DateTo}
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  </div>
  <button type="button" className="btn btn-success mx-5 mt-3" onClick={() => dispatcher()({type:'updateDate'})}>Update Data</button>
</form>
);

const SelectBox = (model, dispatcher)=>(
    <select className="form-control w-70 mb-5" value={model.currentCity} onChange={(selected)=> dispatcher()({type:"getCity",selected})} >
      <option value="Horsens">Horsens</option>
      <option value="Aarhus">Aarhus</option>
      <option value="Copenhagen">Copenhagen</option>
    </select>
);
const TableComponentHistory = (model) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col"> Time</th>
        <th scope="col"> Type </th>
        <th scope="col"> Value </th>
        <th scope="col"> Unit </th>
      </tr>
    </thead>
    <tbody>
    {
      model.CurrentShownData.map(function(weatherData){
        return <WeatherHistoryRow {...weatherData}/>
      })
    }
    </tbody>
  </table>
);
      
const WeatherHistoryRow = (weatherData)=>{
  let date = new Date(weatherData.time);
    if(date > new Date()){
      return   <tr>
      <td key={weatherData.time} >{weatherData.time}</td>
      <td key={weatherData.type}>{weatherData.type}</td>
    <td key={weatherData.from + weatherData.to}>From: {weatherData.from}-> To: {weatherData.to}</td>
      <td key={weatherData.unit}>{weatherData.unit}</td>
    </tr>
    }
    else {
      return<tr>
        <td key={weatherData.time}>{weatherData.time}</td>
        <td key={weatherData.type}>{weatherData.type}</td>
        <td key={weatherData.value}>{weatherData.value}</td>
        <td key={weatherData.unit}>{weatherData.unit}</td>
      </tr>
      
    }
}
export default dispatcher => model => (
  <App {...{model, dispatcher}}/>
);
