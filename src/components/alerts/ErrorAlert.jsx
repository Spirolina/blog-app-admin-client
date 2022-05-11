import React, { useContext } from 'react';
import { ErrorContext } from '../../contexs/ErrorProvider';
import '../alerts/error-alert.css';
import { AiFillCloseCircle } from 'react-icons/ai';

export const ErrorAlert = ({ err }) => {
    const error = useContext(ErrorContext);

    const handleClick = () => {
        const currentErrors = [...error.errors];
        let index;
        currentErrors.forEach((error, i) => {
            if (error.id === err.id) {
                index = i;
                return;
            }
        })
        currentErrors.splice(index, 1);
        error.putErrors(currentErrors);

    }
    return (
        <div className='error-alert'>
            <div className='error-message'> 
                <p>{ err.msg.charAt(0).toUpperCase() + err.msg.slice(1) }</p>
            </div>
            <AiFillCloseCircle className='error-icon' onClick={handleClick} />
        </div>
    );
}
