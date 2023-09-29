import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            <Route exact path='/' element={<Home/>}>
              
            </Route>
            <Route exact path='/about' element={<About/>}>
              
            </Route>
         </Routes>
      </div>
    </Router>
  );
}

export default App;