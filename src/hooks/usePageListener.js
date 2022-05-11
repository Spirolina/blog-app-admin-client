import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorContext } from '../contexs/ErrorProvider'


export const usePageListener = () => {
    let navigate = useNavigate()
    const error = useContext(ErrorContext);    
    useEffect(() => {
        error.putErrors([]);
    },[navigate])
    return (
    <div>usePageListener</div>
  )
}
