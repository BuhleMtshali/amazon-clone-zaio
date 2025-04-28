import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import './App.css'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<Products />} />
    </Routes>
      
    </>
    
  )
}

export default App
