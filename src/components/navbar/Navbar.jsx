import React, { useContext } from 'react'
import '../navbar/navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexs/AuthProvider';
import { ImExit } from 'react-icons/im';

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const logOutHandler = (e) => {
    e.preventDefault();
    auth.logOut();
  }
  return (
    <nav className='navbar'>
      <div className='navigation-panel'>
        <span className='brand'  onClick={(e) => {
          e.preventDefault();
          navigate('/');

        }}> Blog App</span>
      </div>
      
      
      <div className='acount-panel'>
        {auth.user ? <h3> {auth.user.username} </h3>  :<Link to='/login' > Login </Link>  }
        {auth.user ? null :<Link to='/register' > Register </Link>}
        {!auth.user ? null : <button className='logout-button' onClick={logOutHandler}> <ImExit /></button>}
      </div>
      
     </nav>
  )
}
