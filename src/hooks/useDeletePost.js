import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexs/AuthProvider';
import { ErrorContext } from '../contexs/ErrorProvider';

export const useDeletePost = () => {
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const auth = useContext(AuthContext);
    const error = useContext(ErrorContext);
    useEffect(() => {
        if (id) {
            setLoading(true);
            setDeleteStatus(false);
              axios
            .delete(`${process.env.REACT_APP_API_HOST}/api/dashboard/${id}/delete`, {
                headers: {
                    authorization: 'baerer ' + auth.jwt
                }
            })
            .then(res => {
                setDeleteStatus(true);
                setLoading(false);
            })
            .catch(err => {
                error.putErrors(err.response.data.errors);
                setDeleteStatus(true);
                setLoading(false);
            })
        }
      
    }, [id])
    
    return {
      deletePost :  (someId) => {
        setId(someId);
        },
        loading,
        deleteStatus
    }
}
