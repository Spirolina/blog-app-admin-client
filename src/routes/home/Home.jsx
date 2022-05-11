import '../home/home.css'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexs/AuthProvider'

export const Home = () => {
    const auth = useContext(AuthContext);
  
    if (auth.user) {
      return (<div className='homepage'>
          <h2> Welcome to Blog App admin client { auth.user.username}</h2>
    <p>  You are able to creating, deleting, editing posts.</p>
</div>)
  }
    return (
      <div className='homepage'>
          <h2> Welcome to Blog App admin client</h2>
        <p> You can register or login. In this website you are able to creating, deleting, editing posts.</p>
    </div>
  )
}
