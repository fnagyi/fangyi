import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles/index.scss";
import {MainRoute} from "./scripts/index" 
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// import  "./redux";
// import "./react-redux"
serviceWorker.unregister();   
