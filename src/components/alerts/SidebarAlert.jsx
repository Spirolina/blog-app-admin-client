import React from 'react'
import '../alerts/sidebar-alert.css';
import { ImEnter } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

export const SidebarAlert = () => {
  let navigate = useNavigate();
  return (
    <div className='sidebar-alert'>
     <div className='sidebar-alert-body'> <p>
        Please login to make admin operations.
      </p> </div>
      <button onClick={() => navigate('/login')} className='sidebar-alert-button'>
        <ImEnter className='sidebar-alert-icon' />
        <span className='sidebar-alert-span'> Login </span>
      </button>
    </div>
  )
}
