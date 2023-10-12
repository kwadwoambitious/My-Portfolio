import React from 'react';
import './index.css';
import { hydrate, render } from "react-dom";
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
 
const APP = (
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
            <Route path='/*' element={<App/>} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}