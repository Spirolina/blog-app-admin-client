import React, { useEffect } from 'react'
import '../post/post.css'
import { GrView } from 'react-icons/gr'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { convert } from '../../helpers/dateFormatter'
import { useNavigate } from 'react-router-dom'
import { useDeletePost } from '../../hooks/useDeletePost';
export const Post = ({ post, refreshPosts }) => {
    let navigate = useNavigate();
    const {deletePost, loading, deleteStatus} = useDeletePost();
    const handleView = () => {
        navigate(`/singlepost/${post._id}`);
    }

    const handleDelete = () => {
    deletePost(post._id);
    }

    useEffect(() => {
        if (deleteStatus)
            refreshPosts();
    },[deleteStatus])


    

    return (
        <div className='post'>
            {loading ? <div className='post-delete-loading'> 
                Deleting post...
            </div> : null}
            <div className='post-title'>
                <h3> {post.title} </h3>
            </div>
  
            <div className='post-buttons'>
                <button onClick={handleView} className='view'> <GrView /> </button>

           
                <div className='upper-buttons'>
                    <button onClick={handleDelete} className='delete'> <AiFillDelete /> </button>

                    <button className='edit'
                        onClick={() => navigate(`/dashboard/${post._id}/edit`, {
                            state: {
                                initialTitle: post.title,
                                initialContent: post.content,
                        }
                    })}
                    > <AiFillEdit /> </button>
                </div>
            </div>
            <div className='post-author'>
                <h5>
                    {post.author.username}
                </h5>
            </div>
            <div className='post-date'>
                <h5>
                    {convert(post.date)}
                </h5>
            </div>
                
           
        </div>
    );
};
