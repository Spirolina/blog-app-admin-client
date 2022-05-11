import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import { ErrorContext } from '../../contexs/ErrorProvider';
import { useSinglePost } from '../../hooks/useSinglePost';
import parse from 'html-react-parser'
import { convert } from '../../helpers/dateFormatter';
import '../singlepost/singlepost.css'

export const SinglePost = () => {
    let { postid } = useParams();
    const { post, loading } = useSinglePost(postid);
    const error = useContext(ErrorContext);
    

    if (error.errors.length !== 0) {
        return (
            <div className='single-post'>
                <h1> 404 NOT FOUND </h1>

            
                <div className='error-container'>
                    {error.errors.map(err => <ErrorAlert err={err} key={err.id} />)}
                </div>
            </div>
        )
    }

    if (loading) {
        return (<h1>
            Loading...
        </h1>)
    }



    if (post)
        return (
            <div className='single-post'>
                <div className='single-post-upperbar'>
                    <div className='single-post-author'>
                        {post.author.username}
                    </div>
                    <div className='single-post-title'>
                    <h1>{post.title}</h1>
                </div>
                    <div className='single-post-date'>
                        {convert(post.date)}
                    </div>
                </div>
                  
                <div className='single-post-body'>
                    {parse(post.content)}
                </div>
                 
                
    
            </div>
        );
    
    return (
        <div>
            There is no post.
        </div>
    )
}
