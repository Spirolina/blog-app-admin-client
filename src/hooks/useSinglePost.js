import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ErrorContext } from '../contexs/ErrorProvider';

export const useSinglePost = (id) => {
    const [post, setPost] = useState('');
    const [loading, setLoading] = useState(false);
    const error = useContext(ErrorContext);

    useEffect(() => {
        
            setLoading(true);
       
        axios
            .get(`${process.env.REACT_APP_API_HOST}/api/dashboard/${id}`)
            .then(res => {
                setPost(res.data.post);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status === 404) {
                    error.putErrors(err.response.data.errors);
                }
            })
        
        
    }, [id])
    
    return {
        post,
        loading
    }
}
