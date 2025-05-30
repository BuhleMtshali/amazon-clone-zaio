import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { db } from '../firebase';
import axios from '../components/axios';

function Payment (){
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${Math.round(getBasketTotal(basket) * 100)}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();

  }, [basket]);


const handleSubmit = async (event) => {
  event.preventDefault();
  setProcessing(true);
  const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement)
    }
  }).then(({ paymentIntent }) => {
    db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .doc(paymentIntent.id)
    .set({
      basket: basket,
      amount: paymentIntent.amount,
      created: paymentIntent.created
    })
    setSucceeded(true)
    setError(null)
    setProcessing(false);
    dispatch({
      type: 'EMPTY_BASKET'
    })
    history.replace('/orders')
  })
}

const handleChange = e => {
  setDisabled(e.empty);
  setError(e.error ? e.error.message : "")
}

return (
  <div className="payment">
    <div className="payment_container">
      <h1>Checkout (<Link to={'/checkout'}>{basket?.length}</Link>)</h1>
      <div className="payment_title"><h3>Delivery Address</h3></div>
      <p>{user?.email}</p>
      <p>123 React Lane</p>
      <p>SAN Francisco</p>
    </div>
    <h3>Review Items and delivery</h3>
  </div>
)

}