import React, { useContext } from 'react'
import './Product.css';
import ShoppingContext from '../context/shopping/shoppingContext';
import { useStateValue } from './StateProvider';


const Product = ({ id, image, title, rating, price }) => {
  // const shoppingContext  = useContext(ShoppingContext);
  // const  { addToBasket } = shoppingContext;
  // const AddToBasketHandler = () => {
  //   addToBasket({item: { id, image, title, rating, price } })
  // }
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
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