import React from 'react';

const Product = ({ title, image, price, color, type }) => {

    return (
        <div className="product-card">
            <p>{title}</p>
            <img src={image}/>
        </div>
    );
};

export default Product;