import React from 'react';
import './index.css';
import { hydrate, render } from "react-dom";
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
const APP = (
  <React.StrictMode>
      <Router>
        <Routes>
            <Route path='/*' element={<App/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}