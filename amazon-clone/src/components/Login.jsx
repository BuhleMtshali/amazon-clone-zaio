import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to={"/"}>
        <img src="/login-logo.png" alt="logo" className="logo-img" />
      </Link>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="e.g johnDoe124@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="e.g john322"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <small>
          By signing-in you agree to the AMAZON FAKE CLONE condition of use &
          Sale. Please see our Privacy Notice, Cookies Notice and our
          Interest-Based Ads Notice.
        </small>
      </form>
      <button onClick={register}>Create your Amazon Account</button>
    </div>
  );
};

export default Login;
