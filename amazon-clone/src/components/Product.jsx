import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, image, title, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product_info">
        <p>{title}</p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="price">
          <span>R</span> {price}
        </p>
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
