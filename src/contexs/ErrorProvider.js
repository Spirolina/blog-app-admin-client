import React, { createContext, useState } from 'react'
import uuid from 'react-uuid';
import { usePageListener } from '../hooks/usePageListener';

export const ErrorContext = createContext();


export const ErrorProvider = ({children}) => {
    const [errors, setErrors] = useState([]);
   
    const putErrors = (someErrors) => {
        someErrors.forEach(err => {
            if(!err.id)
                err.id = uuid();
        });

        setErrors(someErrors);
    }
    

    const value = {
        errors,
        putErrors,
    }
    
    return (
        <ErrorContext.Provider value={value} >
            {children}
        </ErrorContext.Provider>
    )
}
