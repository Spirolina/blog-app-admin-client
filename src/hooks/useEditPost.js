import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexs/AuthProvider';
import { ErrorContext } from '../contexs/ErrorProvider';

export const useEditPost = () => {
    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const auth = useContext(AuthContext);
    const error = useContext(ErrorContext);

    useEffect(() => {
        if (id) {
            setLoading(true);
             axios
            .put(`${process.env.REACT_APP_API_HOST}/api/dashboard/${id}/edit`, {
                title: title,
                content: content,
            }, {
                headers: {
                    authorization: 'baerer ' + auth.jwt
                }
            }
            )
            .then(res => {
                if (res.data.errors) {
                    error.putErrors(res.data.errors);
                    setLoading(false);
                    return;
                }
                setSuccess(true);
                setLoading(false);
            })
            .catch(err => {
                if (err.response.status === 401) {
                    error.putErrors(err.response.data.errors);
                    setLoading(false);
                }
            });
        }
       

    }, [id, title, content])
    
    return {
        editPost: (id_, title_, content_) => {
            setId(id_);
            setTitle(title_);
            setContent(content_);
        },
        success,
        loading
    }
}
