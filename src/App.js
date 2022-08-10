import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import './components/calculator.css';
import Home from './components/home';
import Navigation from './components/navigation';
import Quote from './components/quote';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
