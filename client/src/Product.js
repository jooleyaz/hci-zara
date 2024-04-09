import React from 'react';
import {Navigate} from 'react-router-dom';

const Product = ({ title, image, price, color, type, id, size }) => {

    return (
        <div className="product-card">
            <p>{title}</p>
            <img src={image}/>
        </div>
    );
};

export default Product;