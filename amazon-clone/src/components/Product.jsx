import React, { useContext } from 'react'
import './Product.css';
import ShoppingContext from '../context/shopping/shoppingContext';


const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext  = useContext(ShoppingContext);
  const  { addToBasket } = shoppingContext;
  const AddToBasketHandler = () => {
    addToBasket({item: { id, image, title, rating, price } })
  }
  return (
    <div className="product">
        <div className="product-image">
        <img src={image} alt="product 1" />
        </div>
        <div className="product_info">
        <p>{title}</p>
        <div className="rating">
        {Array(rating).fill().map((_, i)=> (<p>⭐</p>))}
        </div>
        <p className="price"><span>R</span> {price}</p>
        <button onClick={AddToBasketHandler}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product;