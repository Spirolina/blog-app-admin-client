import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {useJwt} from '../hooks/jwt'
import { ErrorContext } from './ErrorProvider';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [payload, setPayload] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [jwt, user, setUser, setJwt] = useJwt(token, payload);
    const [previewPost, setPreviewPost] = useState(null);
    const error = useContext(ErrorContext);
    

    const invalidJWT = () => {
        setUser(null);
    }

    const login = (username, password) => {
        const data = { username, password };
        axios
        .post(`${process.env.REACT_APP_API_HOST}/api/login`, data)
            .then(res => {
                
                if (res.data.errors) {
                    console.log(res);
                    error.putErrors(res.data.errors);
                    return;
                }
                setToken(res.data.token);
                setPayload(res.data.payload);
          
      })
        
    }

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user');

        setJwt(null);
        setUser(null);
    }


    const value = {
        jwt,
        user,
        login,
        invalidJWT,
        logOut,
        refresh,
        setRefresh,
        previewPost,
        setPreviewPost
    
    };

  return (
      <AuthContext.Provider value={value} >
          {children}
    </AuthContext.Provider>
  )
}
