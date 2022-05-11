import React, { useContext, useEffect, useState } from 'react'
import './dashboard.css'
import { usePosts } from '../../hooks/usePosts'
import { Post } from '../../components/post/Post';
import { AuthContext } from '../../contexs/AuthProvider';
import { CreateButton } from '../../components/buttons/CreateButton'
import { Loading } from '../../components/loading/Loading';

export const Dashboard = () => {
    
    const auth = useContext(AuthContext);
    const { posts, loading, refreshPosts } = usePosts();
    




    return (
        <>
            <div className='posts'>
                <div className='container'>
                    
        
                    {!auth.user ? <p> not permisson</p> : loading ?
                            <Loading className='dashboard-loading' type='spin' color='#e38e45' /> 
                        
                        :
                        posts ?
                            posts.map(post => <> <Post  key={post._id} post={post} refreshPosts={refreshPosts} /> <hr className='post-divider' />  </>) :
                            <p>Thre is no post</p>
                    }
                </div>
                
            </div>
            <CreateButton />


        </>
    )
}
