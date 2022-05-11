import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useJwt } from '../../hooks/jwt';
import { AuthContext } from '../../contexs/AuthProvider';
import { useNavigate, useParams } from "react-router-dom";
import { ErrorContext } from '../../contexs/ErrorProvider';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import '../login/login.css'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext);
  const error = useContext(ErrorContext);
  let navigate = useNavigate();
  
  useEffect(() => {
    if (auth.user) {
      navigate('/dashboard');  
    }
  },[auth])

  const submitHandler = (e) => {
    e.preventDefault();
    auth.login(username, password);
    
}

  return (
    <div className='login'>
      <form className='login-form'>
        <label htmlFor='username'> Username : </label>
        <input type='text' onChange={(e) => setUsername(e.target.value)} name='username' />

        <label htmlFor='password'> Password : </label>
        <input type='password' onChange={(e) => setPassword(e.target.value)} name='password' />
        <button className='submit-login' onClick={submitHandler}> Submit </button>
      </form>
      {error.errors ? <div className='error-container'>
        {error.errors.map(err => <ErrorAlert err={err} key={err.id} />)}
      </div> : null}
    </div>
  )

  
  
}
