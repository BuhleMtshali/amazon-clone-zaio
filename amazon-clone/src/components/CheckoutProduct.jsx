import React from 'react'
import { useStateValue } from './StateProvider';

function CheckoutProduct ({ id, image, title, price, rating, hideButton}){
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return(
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="info">
        <p>{title}</p>
        <p>$ {price}</p>
        <div className="rating">
          {Array(rating).fill().map((_, i) => (
            <p>:star:</p>
          ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  )


}




export default CheckoutProduct;