import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../contexs/AuthProvider';
import { ErrorContext } from '../contexs/ErrorProvider';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(true)
    
    const refreshPosts = () => {
        setRefresh(true);
    }

    const error = useContext(ErrorContext)
    const auth = useContext(AuthContext);
    useEffect(() => {
        if (refresh && auth.jwt !== 'did not loaded') {
             setLoading(true);
            axios.get(`${process.env.REACT_APP_API_HOST}/api/dashboard?admin=true`, {
                headers: {
                    authorization: 'baerer ' + auth.jwt
            }})
                .then(res => {
                    if (res.data.errors) {
                      
                        error.putErrors(res.data.errors);
                    }
                    
                    setPosts(res.data.posts);
                    setLoading(false);
                    setRefresh(false);
                })
                .catch(err => {
                    auth.invalidJWT();
                    setLoading(false);
                    setRefresh(false);
                })
       }      
        
    },[refresh, auth.jwt])
  
    return { posts, loading, refreshPosts };
}
