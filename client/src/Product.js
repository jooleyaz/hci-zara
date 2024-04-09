import React from 'react';
import {Navigate} from 'react-router-dom';
import './Product.css'

const Product = ({ title, image, price, color, type, id, size }) => {

    return (
        <div className="product-card">
            <img src={image}/>
            <dib class="middle">
                <div class="info">
                    {title}
                    <p>${price}, size {size}</p>
                </div>
            </dib>
        </div>
    );
};

export default Product;