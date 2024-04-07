import React, { useState, useEffect } from 'react';
import Product from './Product';
import './App.css';
import Browsing from './Browsing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Browsing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
