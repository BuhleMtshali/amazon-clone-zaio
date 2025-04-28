import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/layout/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product-details/:id' element={<ProductDetails />} />
    </Routes>
      
    </>
    
  )
}

export default App
