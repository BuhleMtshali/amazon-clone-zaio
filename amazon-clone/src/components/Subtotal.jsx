import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from 'react';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom'

const Subtotal = () => {
  const history = useHistory();
  const [{basket, user}, dispatch] = useStateValue();

  return(
    <div className="subTotal">
      <CurrencyFormat renderText={(value) => (
        <>
        <p>
          subtotal ({basket.length} items): {value}
        </p>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      />
    {user && (
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    )}
    {!user && (
      <button onClick={e => history.push('/login')}>Sign in or create account to complete checkout</button>
    )}
    </div>
  )
}

export default Subtotal;