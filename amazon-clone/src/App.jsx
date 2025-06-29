import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Home from './components/Home';
import Header from './components/layout/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Payment from './components/Payment';
import Checkout from './components/Checkout';

import './App.css';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';

// Stripe public key
const promise = loadStripe('pk_test_51RJiGvPpeDP63jSDufIq10UR7Bb8pHbHxygFktQpCPunlZsdCrI2LauJfObbGA3xA8t7eu4Uxye5SlfaYPudVnQT00Ow7etQip');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('User is -> ', authUser);
      dispatch({
        type: 'SET_USER',
        user: authUser || null,
      });
    });

    return () => unsubscribe(); // cleanup on unmount
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
           <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
