import '../sidebar/sidebar.css'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { MdDashboard } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoAddCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexs/AuthProvider';
import { SidebarAlert } from '../alerts/SidebarAlert';

export const Sidebar = () => {

  const auth = useContext(AuthContext);
  const [hamburgerStyle, setHamburgerStyle] = useState('');
  let navigate = useNavigate();

 
  
  const handleHamburger = () => {
    if (!hamburgerStyle) {
      setHamburgerStyle({ width: "60px" });
    } else {
      setHamburgerStyle('');
    }
  }

  return (
    <div style={!hamburgerStyle ? {width: "20%"} : hamburgerStyle } className='sidebar'>
      {auth.user ? <div className='sidebar-buttons'>
        <NavLink to='/'
         className={({ isActive }) =>
         isActive ? 'active-navlink' : undefined
       }
        > <span> <AiFillHome className='sidebar-icon' /> {!hamburgerStyle ? <span> Home </span> : null }  </span>  </NavLink>
     
        <NavLink to='/dashboard'
        className={({ isActive }) =>
        isActive ? 'active-navlink' : undefined
      }
        > <span> <MdDashboard className='sidebar-icon' /> {!hamburgerStyle ? <span> Posts </span> : null }</span>  </NavLink>
     
        <NavLink to='/create'
        className={({ isActive }) =>
        isActive ? 'active-navlink' : undefined
      }
        > <span> <IoAddCircle  className='sidebar-icon' /> {!hamburgerStyle ? <span> Create Post </span> : null }  </span> </NavLink>
      
      </div> : <SidebarAlert /> }
      <button onClick={handleHamburger} className='sidebar-hamburger'>
          <GiHamburgerMenu />
      </button>
    </div>
  )
}
