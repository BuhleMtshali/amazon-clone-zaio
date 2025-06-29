import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct"; 
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from './axios';
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // fetch client secret from backend
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
      setClientSecret(response.data.clientSecret);
    };

    if (basket?.length > 0) getClientSecret();
  }, [basket]);

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload?.paymentIntent?.status === "succeeded") {
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: "EMPTY_BASKET",
      });

      navigate("/orders");
    } else {
      setError("Payment failed");
      setProcessing(false);
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>San Francisco</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
                <p>R{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <h3>Order Total: R{getBasketTotal(basket).toFixed(2)}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? "Processing..." : "Buy Now"}</span>
                </button>
              </div>

              {error && <div style={{ color: "red" }}>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
