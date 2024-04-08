import React, { useState, useEffect } from 'react';
import Product from './Product';
import './App.css';
import Browsing from './Browsing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import products from './products.json';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Browsing database={products}/>}/>
        <Route path="/product/:id" element={<ProductInfo database={products}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
