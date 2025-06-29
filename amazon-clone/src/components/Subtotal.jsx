import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'; // FIXED

const Subtotal = () => {
  const navigate = useNavigate(); // FIXED
  const [{ basket, user }] = useStateValue();

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      {user ? (
        <button onClick={() => navigate('/payment')}>Proceed to Checkout</button>
      ) : (
        <button onClick={() => navigate('/login')}>
          Sign in or create account to complete checkout
        </button>
      )}
    </div>
  );
};

export default Subtotal;
