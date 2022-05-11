import React, { useContext } from 'react'
import { AuthContext } from '../../contexs/AuthProvider'
import parse from 'html-react-parser'
import { convert } from '../../helpers/dateFormatter';
import { useNavigate } from 'react-router-dom';

export const PostPreview = () => {
    const auth = useContext(AuthContext);
    let navigate = useNavigate();
    if (!auth.previewPost) {
        return (
            <p>
                There is no post to preview.
            </p>
        )
    }

  return (
       <div className='single-post'>
          <button onClick={() => navigate('/create', {
           state : {  initialTitle: auth.previewPost.title,
              initialContent: auth.previewPost.content}
        })}> Back</button>

                <div className='single-post-upperbar'>
                    <div className='single-post-author'>
                        {auth.previewPost.author.username}
                    </div>
                    <div className='single-post-title'>
                    <h1>{auth.previewPost.title}</h1>
                </div>
                    <div className='single-post-date'>
                        {convert(auth.previewPost.date)}
                    </div>
                </div>
                  
                <div className='single-post-body'>
                    {parse(auth.previewPost.content)}
                </div>
                 
                
    
            </div>
  )
}
