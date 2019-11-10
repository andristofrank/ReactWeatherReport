import ReactDOM from 'react-dom';
import './index.css';
import view from './App.js';
import model from "./model.js";
import dispatcher from"./dispatcher.js";
import store from "./store.js"
import * as serviceWorker from './serviceWorker.js';

async function init(){
    try{
      const wh_Horsens = await fetch("http://localhost:8080/data/Horsens").then(
        res => res.json()
      );
      const wf_Horsens = await fetch(
        "http://localhost:8080/forecast/Horsens"
      ).then(res => res.json());
      const wh_Aarhus = await fetch("http://localhost:8080/data/Aarhus").then(
        res => res.json()
      );
      const wf_Aarhus = await fetch(
        "http://localhost:8080/forecast/Aarhus"
      ).then(res => res.json());
      const wh_Cph = await fetch("http://localhost:8080/data/Copenhagen").then(
        res => res.json()
      );
      const wf_Cph = await fetch(
        "http://localhost:8080/forecast/Copenhagen"
      ).then(res => res.json());
      const theModel = model(
        wh_Horsens,
        wh_Aarhus,
        wh_Cph,
        wf_Horsens,
        wf_Aarhus,
        wf_Cph
      );
      let renderer= dom => ReactDOM.render( dom, document.getElementById('root'));
      let theDispatcher
      const theView = view(()=> theDispatcher)
      const theStore = store(theModel,theView,renderer)
      theDispatcher = dispatcher(theStore)
      renderer(theView(theModel))

    }
    catch(err){
        console.log(err);
    }

}
    init();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
