import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path='/*' element={<App/>} />
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);