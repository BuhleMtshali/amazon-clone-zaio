import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import Product from './Product';

const Products = () => {
  return (
    <div className="products-wrapper">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default Products