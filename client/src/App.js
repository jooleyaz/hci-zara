import React, { useState, useEffect } from 'react';
import Product from './Product';
import './App.css';

function App() {
  const [productData, setProductData] = React.useState(null);

  React.useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then ((data) => setProductData(data.message));
  }, []);

  const [products] = useState([
    {
        "title": "ZW COLLECTION HIGH WAIST CROPPED BOOTCUT JEANS",
        "image": "https://static.zara.net/assets/public/159b/e920/f5354f12aebb/482e85a52763/08246067250-e1/08246067250-e1.jpg?ts=1712135152369&w=563",
        "price": "65.90",
        "color": "white",
        "type": "pants"
    },
    {
        "title": "TRF HIGH RISE WIDE LEG JEANS",
        "image": "https://static.zara.net/assets/public/0a84/f835/7ec7417a8dc3/612916f34de6/06045022800-015-e1/06045022800-015-e1.jpg?ts=1710241554433&w=563",
        "price": "65.90",
        "color": "black",
        "type": "pants"
    },
    {
        "title": "ZW COLLECTION HIGH WAIST MARINE STRAIGHT JEANS",
        "image": "https://static.zara.net/photos///2023/I/0/1/p/1934/246/800/2/w/563/1934246800_6_1_1.jpg?ts=1691144043427",
        "price": "65.90",
        "color": "black",
        "type": "pants"
    },
    {
        "title": "TRF LOW RISE STRAIGHT CUT JEANS",
        "image": "https://static.zara.net/assets/public/4e9d/f2f2/a54a4b68bf44/a40cedb9ea28/02569200807-e1/02569200807-e1.jpg?ts=1705659900030&w=563",
        "price": "65.90",
        "color": "black",
        "type": "pants"
    },
    {
        "title": "ZW COLLECTION MID WAIST LOOSE SLIM JEANS",
        "image": "https://static.zara.net/assets/public/5ea7/3949/30c24ede8331/902074732ff6/00943040427-e1/00943040427-e1.jpg?ts=1706635252630&w=563",
        "price": "65.90",
        "color": "blue",
        "type": "pants"
    },
    {
        "title": "RIB KNIT BANDEAU TOP",
        "image": "https://static.zara.net/assets/public/6936/9aa6/4f2e42f5a0f3/23ff1e3ecc0a/04938005505-e1/04938005505-e1.jpg?ts=1711541489574&w=563",
        "price": "29.90",
        "color": "green",
        "type": "tops"
    },
    {
        "title": "RIBBED KNIT CROP TOP",
        "image": "https://static.zara.net/assets/public/1b53/16f1/7a69414ea93f/7bb02cd2e49c/05755014620-e1/05755014620-e1.jpg?ts=1710507346591&w=563",
        "price": "35.90",
        "color": "pink",
        "type": "tops"
    },
    {
        "title": "STRUCTURED JACQUARD TOP",
        "image": "https://static.zara.net/assets/public/016e/5c41/67f6476397e0/4fbd61766470/05039169620-e1/05039169620-e1.jpg?ts=1708936249047&w=563",
        "price": "39.90",
        "color": "pink",
        "type": "tops"
    },
    {
        "title": "RIBBED CHENILLE CROP TOP",
        "image": "https://static.zara.net/assets/public/fdde/c67d/f3104681b5dc/800abc873ca4/07901325423-e1/07901325423-e1.jpg?ts=1708422553969&w=563",
        "price": "29.90",
        "color": "blue",
        "type": "tops"
    },
    {
        "title": "SATIN EFFECT TOP WITH BOW",
        "image": "https://static.zara.net/assets/public/dcef/71d2/d8474796a537/73a993ef0312/02170331500-e1/02170331500-e1.jpg?ts=1711100453834&w=563",
        "price": "39.90",
        "color": "green",
        "type": "tops"
    },
    {
        "title": "PRINTED TULLE TOP",
        "image": "https://static.zara.net/assets/public/e882/44ef/73824c04976b/cedc0b68f3c9/03067035044-e1/03067035044-e1.jpg?ts=1709804968995&w=563",
        "price": "39.90",
        "color": "blue",
        "type": "tops"
    }
]);

  const [selectedColors, setSelectedColors] = useState([]);

  const addColor = (color) => {
    setSelectedColors(prevColors => {
      // If the color is already selected, remove it, otherwise add it
      if (prevColors.includes(color)) {
        return prevColors.filter(c => c !== color);
      } else {
        return [...prevColors, color];
      }
    });
  };

  const filteredProducts = products.filter(product => 
    selectedColors.length === 0 || selectedColors.includes(product.color)
  );

  return (
    <div className="App">

      <p>{productData}</p>

      <div className="screen">

        <div className="left-panel">
          <svg aria-label="ZARA logo Canada. Go to homepage" class="layout-catalog-logo-icon" viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
          <div className="filter">
            <div className="size-filter">

            </div>
            <div className="type-filter">

            </div>

            <div className="color-filter">
                <div id="red-block" className="color-block"></div>
                <div id="orange-block" className="color-block"></div>
                <div id="yellow-block" className="color-block"></div>
                <div id="green-block" className="color-block"></div>
                <div id="blue-block" className="color-block"></div>
                <div id="purple-block" className="color-block"></div>
                <div id="pink-block" className="color-block"></div>
                <div id="black-block" className="color-block"></div>
                <div id="white-block" className="color-block"></div>
                <div id="grey-block" className="color-block"></div>
            </div>
          </div>
          <button onClick={() => addColor("blue")}>Toggle blue</button>
          <button onClick={() => addColor("white")}>Toggle white</button>
        </div>

        <div className="products">
          <img src="Decoration.png"></img>
          <div className="product-grid">
            {filteredProducts.map(product => (
              <Product
                title={product.title}
                image={product.image}
                price={product.price}
                color={product.color}
                type={product.type}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
