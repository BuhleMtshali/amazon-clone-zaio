import React from 'react'
import './Product.css';

const Product = ({ id, image, title, rating, price }) => {
  return (
    <div className="product">
        <div className="product-image">
        <img src={image} alt="product 1" />
        </div>
        <div className="product_info">
        <p>{title}</p>
        <p className="rating">{rating}</p>
        <p className="price"><span>R</span> {price}</p>
        <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product;