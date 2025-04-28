import React from "react";
import { Route, Routes } from 'react-router-dom';
import './Home.css';
import Products from "./Products";


const Home = () => {
    return(
        <div className="home-wrapper">
           <div className="banner">
            <h1>Easter Payday Specials</h1>
           </div>
        <Products />
        </div>
    )
}

export default Home;