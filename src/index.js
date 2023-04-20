import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './containers/App.js'
import 'tachyons'

import reportWebVitals from './reportWebVitals';


//React18 from
//const root = ReactDOM.createRoot(document.getElementById('robo'));
//til here react 18

// root.render(
//  <h1>Hello World</h1> );

//React 17 - ReactDOM.render(<App/>, document.getElementById('robo'))
//React 18 from 
ReactDOM.createRoot(document.getElementById('robo')).render(<App/>)
//root.render(<App/>)
//React 18 till here

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
