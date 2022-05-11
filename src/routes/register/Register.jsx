import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ErrorContext } from '../../contexs/ErrorProvider';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import '../register/register.css'
import { Loading } from '../../components/loading/Loading';
import { SuccessAlert } from '../../components/alerts/SuccessAlert';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const error = useContext(ErrorContext)
    
    const submitHandler = (e) => {
        setLoading(true);
        e.preventDefault();
        const data = { username, password, passwordConf };
        axios
            .post(`${process.env.REACT_APP_API_HOST}/api/register`, data)
            .then(res => {
                if (res.data.errors) {
                    error.putErrors(res.data.errors);
                    setLoading(false);
                    return;
                }
                setSuccess(true);
            })
            
    }
    if (success) {
        return ( <div className='register'>
            <SuccessAlert msg="You successfully registered please log in to make operations !" />

        </div>
        )
    }

    return (
        <div className='register'>
            <form className='register-form'>
                <label htmlFor='username'> Username : </label>
                <input type='text' onChange={(e) => setUsername(e.target.value)} name='username' />

                <label htmlFor='password'> Password : </label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} name='password' />

                <label htmlFor='password_confirm'> Password Again : </label>
                <input type='password' onChange={(e) => setPasswordConf(e.target.value)} name='password_confirm' />
                <button className='submit-register' onClick={submitHandler}> Submit </button>
            </form>
            {error.errors ? <div className='error-container'>
                {
                    error.errors.map(err => <ErrorAlert key={err.id} err={err} />)
                }
            </div> : null}
            {   loading ? <Loading className='register-loading' type='spin' color='#e38e45' /> : null}
        </div>
    );
}
