
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/layout/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import './App.css'
import { emphasize } from '@mui/material';
import AuthContext from './context/AuthContext';
import { auth } from './firebase';
import ShoppingContext from './context/shopping/shoppingContext';
import { use, useContext, useEffect } from 'react';
import Payment from './components/Payment';
import { useStateValue } from './components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51RJiGvPpeDP63jSDufIq10UR7Bb8pHbHxygFktQpCPunlZsdCrI2LauJfObbGA3xA8t7eu4Uxye5SlfaYPudVnQT00Ow7etQip')

function App() {
const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is -> ", authUser);

      if(authUser){
        setUser({user: authUser})
      } else {
        setUser({user: null})
      }
    })
  }, [])


  return (
    <AuthContext.Provider  value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login onLogin={loginHandler}/>} />
      </Routes>
    </main>
    </AuthContext.Provider>
    
  )
}

export default App
