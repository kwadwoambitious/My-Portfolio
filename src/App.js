import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/portfolio' element={<Portfolio/>}/>
            <Route exact path='/certificates' element={<Certificates/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
         </Routes>
      </div>
    </Router>
  );
}

export default App;