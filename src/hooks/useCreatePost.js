import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexs/AuthProvider';
import { ErrorContext } from '../contexs/ErrorProvider';

export const useCreatePost = () => {
    const [titl, setTitl] = useState('');
    const [contnt, setContnt] = useState('');
    const [submit, setSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const auth = useContext(AuthContext);
    const error = useContext(ErrorContext);

    useEffect(() => {
        setSuccess(false);
        if (submit) {
            setLoading(true);
            axios
                .post(`${process.env.REACT_APP_API_HOST}/api/dashboard/create`, {
                    title: titl,
                    content: contnt,
                }, {
                    headers: {
                        authorization: 'baerer ' + auth.jwt
                    }
                })
                .then(res => {
                    if (res.statusText !== 'OK') {
                        throw new Error('error happened');  
                    }
                    if (res.data.errors) {
                        console.log(res);
                        error.putErrors(res.data.errors);
                        setSuccess(false);
                        setLoading(false);
                        return;

                    }
                    setSuccess(true);
                    setLoading(false);
                })
                .catch(err => {
                    if (err.response.status === 401) {
                      auth.invalidJWT();
                        error.putErrors(err.response.data.errors);
                        setSuccess(false); 
                        setLoading(false);
                    }
                    

                })
            setSubmit(false);
        }

    },[titl, contnt, submit])

    return {createPost: (title, content) => {
        setTitl(title);
        setContnt(content);
        setSubmit(true);
    },
        success: success,
        loading,
    }
} 
