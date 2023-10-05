import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const location = useLocation();
  return (
      <div className="App">
        <Header/>
         <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/portfolio' element={<Portfolio/>}/>
                <Route exact path='/certificates' element={<Certificates/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
         </AnimatePresence>
      </div>
  );
}

export default App;