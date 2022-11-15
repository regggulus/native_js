import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {value} from "./monday/mon_01/monday_01_tests/monday01_01";
import {value2} from "./monday/mon_01/monday_01_objects/monday01_02";
import {value3} from "./monday/mon_01/monday_01_objects/cityTest/monday_01_02_01";

let a = value
let b = value2
let c = value3
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
