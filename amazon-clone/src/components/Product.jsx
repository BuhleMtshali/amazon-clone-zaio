import React from 'react'
import './Product.css';

const Product = () => {
  return (
    <div className="product">
        <div className="product-image">
        <img src="/product1.png" alt="product 1" />
        </div>
        <div className="product_info">
        <p>SAMSUNG Galaxy Tab S9 FE+ Plus 12.4” 256GB Android Tablet, Long Battery Life, Powerful Processor, S Pen, 8MP Camera, Lightweight Durable Design, Expandable Storage, US Version, 2023, Mint</p>
        <p className="rating">5</p>
        <p className="price">R850.00</p>
        </div>
    </div>
  )
}

export default Product;