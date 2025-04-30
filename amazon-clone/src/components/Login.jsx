import React, { useState, useRef, use, useEffect, useReducer, act, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import AuthContext from '../context/AuthContext';
import ShoppingContext from '../context/shopping/shoppingContext';
import { auth } from '../firebase';


// const reducer = (state, action) => {
//   const shoppingContext  = useContext(ShoppingContext);
//   const  { basket, user } = shoppingContext;
// }

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const shoppingContext  = useContext(ShoppingContext);
  // const  { setUser } = shoppingContext;
  // const ctx = useContext(AuthContext)

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(auth => {
      history.push('/')}).catch(error => alert(error.message))

  }

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if(auth){
        history.push('/')
      }
    }).catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to={"/"}>
      <img src="/login-logo.png" alt="logo image" className="logo-img"/>
      </Link>
      <h1>Sign In</h1>
      <form >
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder='e.g johnDoe124@gmail.com' value={email} onChange={e => setEmail(e.target.value)}/>
        <label htmlFor="password">Email</label>
        <input type="password" name="password" id="password" placeholder='e.g john322' value={password} onChange={e => {setPassword(e.target.value)}}/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <small>By signing-in you agree to the AMAZON FAKE CLONE condition of use & Sale. Please see our Provacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
      </form>
      <button onClick={register}>Create your Amazon Account</button>
    </div>
  )
}

export default Login;