
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
import { useContext, useEffect } from 'react';

function App() {
  const shoppingContext  = useContext(ShoppingContext);
  const  { setUser } = shoppingContext;


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
