import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <Link to={"/"}>
      <img src="/login-logo.png" alt="logo image" className="logo-img"/>
      </Link>
      <h1>Sign In</h1>
      <form >
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder='e.g johnDoe124@gmail.com'/>
        <label htmlFor="password">Email</label>
        <input type="password" name="password" id="password" placeholder='e.g john322'/>
        <button type='submit'>Sign In</button>
        <small>By signing-in you agree to the AMAZON FAKE CLONE condition of use & Sale. Please see our Provacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
      </form>
      <button>Create your Amazon Account</button>
    </div>
  )
}

export default Login;