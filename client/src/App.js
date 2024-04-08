import React, { useState, useEffect } from 'react';
import Product from './Product';
import './App.css';
import Browsing from './Browsing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductInfo from './ProductInfo';

const products = [
  {
      "id": "1",
      "title": "ZW COLLECTION HIGH WAIST CROPPED BOOTCUT JEANS",
      "image": "https://static.zara.net/assets/public/159b/e920/f5354f12aebb/482e85a52763/08246067250-e1/08246067250-e1.jpg?ts=1712135152369&w=563",
      "price": "65.90",
      "color": "white",
      "type": "pants"
  },
  {
      "id": "2",
      "title": "TRF HIGH RISE WIDE LEG JEANS",
      "image": "https://static.zara.net/assets/public/0a84/f835/7ec7417a8dc3/612916f34de6/06045022800-015-e1/06045022800-015-e1.jpg?ts=1710241554433&w=563",
      "price": "65.90",
      "color": "black",
      "type": "pants"
  },
  {
      "id": "3",
      "title": "ZW COLLECTION HIGH WAIST MARINE STRAIGHT JEANS",
      "image": "https://static.zara.net/photos///2023/I/0/1/p/1934/246/800/2/w/563/1934246800_6_1_1.jpg?ts=1691144043427",
      "price": "65.90",
      "color": "black",
      "type": "pants"
  },
  {
      "id": "4",
      "title": "TRF LOW RISE STRAIGHT CUT JEANS",
      "image": "https://static.zara.net/assets/public/4e9d/f2f2/a54a4b68bf44/a40cedb9ea28/02569200807-e1/02569200807-e1.jpg?ts=1705659900030&w=563",
      "price": "65.90",
      "color": "black",
      "type": "pants"
  },
  {
      "id": "5",
      "title": "ZW COLLECTION MID WAIST LOOSE SLIM JEANS",
      "image": "https://static.zara.net/assets/public/5ea7/3949/30c24ede8331/902074732ff6/00943040427-e1/00943040427-e1.jpg?ts=1706635252630&w=563",
      "price": "65.90",
      "color": "blue",
      "type": "pants"
  },
  {
      "id": "6",
      "title": "RIB KNIT BANDEAU TOP",
      "image": "https://static.zara.net/assets/public/6936/9aa6/4f2e42f5a0f3/23ff1e3ecc0a/04938005505-e1/04938005505-e1.jpg?ts=1711541489574&w=563",
      "price": "29.90",
      "color": "green",
      "type": "tops"
  },
  {
      "id": "7",
      "title": "RIBBED KNIT CROP TOP",
      "image": "https://static.zara.net/assets/public/1b53/16f1/7a69414ea93f/7bb02cd2e49c/05755014620-e1/05755014620-e1.jpg?ts=1710507346591&w=563",
      "price": "35.90",
      "color": "pink",
      "type": "tops"
  },
  {
      "id": "8",
      "title": "STRUCTURED JACQUARD TOP",
      "image": "https://static.zara.net/assets/public/016e/5c41/67f6476397e0/4fbd61766470/05039169620-e1/05039169620-e1.jpg?ts=1708936249047&w=563",
      "price": "39.90",
      "color": "pink",
      "type": "tops"
  },
  {
      "id": "9",
      "title": "RIBBED CHENILLE CROP TOP",
      "image": "https://static.zara.net/assets/public/fdde/c67d/f3104681b5dc/800abc873ca4/07901325423-e1/07901325423-e1.jpg?ts=1708422553969&w=563",
      "price": "29.90",
      "color": "blue",
      "type": "tops"
  },
  {
      "id": "10",
      "title": "SATIN EFFECT TOP WITH BOW",
      "image": "https://static.zara.net/assets/public/dcef/71d2/d8474796a537/73a993ef0312/02170331500-e1/02170331500-e1.jpg?ts=1711100453834&w=563",
      "price": "39.90",
      "color": "green",
      "type": "tops"
  },
  {
      "id": "11",
      "title": "PRINTED TULLE TOP",
      "image": "https://static.zara.net/assets/public/e882/44ef/73824c04976b/cedc0b68f3c9/03067035044-e1/03067035044-e1.jpg?ts=1709804968995&w=563",
      "price": "39.90",
      "color": "blue",
      "type": "tops"
  }
];

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
