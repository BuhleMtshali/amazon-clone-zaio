import React, { useState, useRef, use, useEffect, useReducer, act } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT"){
      return{...state, emailValue: action.payload}
  } if(action.type === "PASS_INPUT"){
    return{...state, passwordValue: action.payload}
  }
  return {
    emailValue: "", passwordValue:""
  }
}

const Login = ({ onLogin }) => {
  const [formIsValid, setFormIsValid] = useState(false);


  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  const { emailValue: email, passwordValue: password } = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        email.includes("@") && password.trim().length > 6
      );
    }, 500);
    return() => {
      clearTimeout(identifier)
    }
  }, [email, password])


  const emailChangeHandler = e => {
    dispatch({type: "EMAIL_INPUT", payload: e.target.value})
  }

  const passwordChangeHandler = e => {
    dispatch({type: "PASS_INPUT", payload: e.target.value})
  }

  const signIn = e => {
    e.preventDefault();
    onLogin(email, password)
  }

  return (
    <div className="login">
      <Link to={"/"}>
      <img src="/login-logo.png" alt="logo image" className="logo-img"/>
      </Link>
      <h1>Sign In</h1>
      <form >
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder='e.g johnDoe124@gmail.com' value={state.emailValue} onChange={emailChangeHandler}/>
        <label htmlFor="password">Email</label>
        <input type="password" name="password" id="password" placeholder='e.g john322' value={state.passwordValue} onChange={passwordChangeHandler}/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <small>By signing-in you agree to the AMAZON FAKE CLONE condition of use & Sale. Please see our Provacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
      </form>
      <button>Create your Amazon Account</button>
    </div>
  )
}

export default Login;