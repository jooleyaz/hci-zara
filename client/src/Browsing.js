import React, { useState } from 'react';
import Product from './Product';
import './App.css';
import { Link } from 'react-router-dom';

function Browsing({database}) {
  const products = database;

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [isBorderBold, setIsBorderBold] = useState(false);
  const [orange, setorange] = useState(false);
  const [yellow, setyellow] = useState(false);
  const [green, setgreen] = useState(false);
  const [blue, setblue] = useState(false);
  const [purple, setpurple] = useState(false);
  const [pink, setpink] = useState(false);
  const [black, setblack] = useState(false);
  const [white, setwhite] = useState(false);
  const [grey, setgrey] = useState(false);

  const toggleBorder = (color) => {
    switch(color) {
      case "red":
        setIsBorderBold(prevState => !prevState);
        break;
      case "orange":
        setorange(prevState => ! prevState);
        break;
      case "yellow":
        setyellow(prevState => ! prevState);
        break;
      case "green":
        setgreen(prevState => ! prevState);
        break;
      case "blue":
        setblue(prevState => ! prevState);
        break;
      case "purple":
        setpurple(prevState => ! prevState);
        break;
      case "pink":
        setpink(prevState => ! prevState);
        break;
      case "black":
        setblack(prevState => ! prevState);
        break;
      case "white":
        setwhite(prevState => ! prevState);
        break;
      case "grey":
        setgrey(prevState => ! prevState);
        break;
    }
  }
  const addColor = (color) => {
    console.log(color);
    toggleBorder(color);
    setSelectedColors(prevColors => {
      // If the color is already selected, remove it, otherwise add it
      if (prevColors.includes(color)) {
        return prevColors.filter(c => c !== color);
      } else {
        return [...prevColors, color];
      }
    });
  };
  const addType = (type) => {
    setSelectedTypes(prevTypes => {
      // If the color is already selected, remove it, otherwise add it
      if (prevTypes.includes(type)) {
        return prevTypes.filter(t => t !== type);
      } else {
        return [...prevTypes, type];
      }
    });
  };
  const addSize = (size) => {
    setSelectedSizes(prevSizes => {
      // If the color is already selected, remove it, otherwise add it
      if (prevSizes.includes(size)) {
        return prevSizes.filter(s => s !== size);
      } else {
        return [...prevSizes, size];
      }
    });
  };

  const filteredProducts = products.filter(product => 
    (selectedColors.length === 0 || selectedColors.includes(product.color)) 
    && (selectedTypes.length === 0 || selectedTypes.includes(product.type))
    && (selectedSizes.length === 0 || selectedSizes.includes(product.size))
  );

  return (
    
    <div className="App">

      <div className="screen">

        <div className="left-panel">
          <svg style={{"margin-bottom":"20px"}} aria-label="ZARA logo Canada. Go to homepage" class="layout-catalog-logo-icon" viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
          <h1>-------------------------------------</h1>
          <div className="filter">
            <div className="type-filter">
              <button id="tops-button" className={`type-block ${selectedTypes.includes("tops") ? 'bold-type' : ''}`} onClick={() => addType("tops")}>TOPS</button>
              <button id="bottoms-button" className={`type-block ${selectedTypes.includes("pants") ? 'bold-type' : ''}`} onClick={() => addType("pants")}>PANTS</button>
              <button id="shoes-button" className={`type-block ${selectedTypes.includes("shoes") ? 'bold-type' : ''}`} onClick={() => addType("shoes")}>SHOES</button>
            </div>

            <h1>-------------------------------------</h1>
            <div className="color-filter">
                <div id="red-block" className={`color-block ${isBorderBold ? 'bold-border' : ''}`} onClick={() => addColor("red")}></div>
                <div id="orange-block" className={`color-block ${orange ? 'bold-border' : ''}`} onClick={() => addColor("orange")}></div>
                <div id="yellow-block" className={`color-block ${yellow ? 'bold-border' : ''}`} onClick={() => addColor("yellow")}></div>
                <div id="green-block" className={`color-block ${green ? 'bold-border' : ''}`} onClick={() => addColor("green")}></div>
                <div id="blue-block" className={`color-block ${blue ? 'bold-border' : ''}`} onClick={() => addColor("blue")}></div>
                <div id="purple-block" className={`color-block ${purple ? 'bold-border' : ''}`} onClick={() => addColor("purple")}></div>
                <div id="pink-block" className={`color-block ${pink ? 'bold-border' : ''}`} onClick={() => addColor("pink")}></div>
                <div id="black-block" className={`color-block ${black ? 'bold-border' : ''}`} onClick={() => addColor("black")}></div>
                <div id="white-block" className={`color-block ${white ? 'bold-border' : ''}`} onClick={() => addColor("white")}></div>
                <div id="grey-block" className={`color-block ${grey ? 'bold-border' : ''}`} onClick={() => addColor("grey")}></div>
            </div>
            <h1>-------------------------------------</h1>
            <div className="size-filter">
              <div id="xs" className={`size-block ${selectedSizes.includes("xs") ? 'bold-size' : ''}`} onClick={() => addSize("xs")}>XS</div>
              <div id="s" className={`size-block ${selectedSizes.includes("s") ? 'bold-size' : ''}`} onClick={() => addSize("s")}>S</div>
              <div id="m" className={`size-block ${selectedSizes.includes("m") ? 'bold-size' : ''}`} onClick={() => addSize("m")}>M</div>
              <div id="l" className={`size-block ${selectedSizes.includes("l") ? 'bold-size' : ''}`} onClick={() => addSize("l")}>L</div>
              <div id="xl" className={`size-block ${selectedSizes.includes("xl") ? 'bold-size' : ''}`} onClick={() => addSize("xl")}>XL</div>
              <div id="xxl" className={`size-block ${selectedSizes.includes("xxl") ? 'bold-size' : ''}`} onClick={() => addSize("xxl")}>XXL</div>
            </div>
            <h1>-------------------------------------</h1>
          </div>
        </div>

        <div className="products">
          <img src="Decoration.png"></img>
          <div className="product-grid">
            {filteredProducts.map(product => (
                <Link to={`/product/${product.id}`}>
                    <Product
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        color={product.color}
                        type={product.type}
                        id={product.id}
                        size={product.size}
                    />
                </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Browsing;
