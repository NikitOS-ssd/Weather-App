import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App.js'
import './style.css'

const body = document.querySelector('#site-root');

const application = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(
  application,
  body
);
