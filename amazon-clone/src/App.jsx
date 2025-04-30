import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/layout/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import './App.css'
import { emphasize } from '@mui/material';
import AuthContext from './context/authContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn');

    if(userInfo === '1'){
      setIsLoggedIn(true)
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

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
