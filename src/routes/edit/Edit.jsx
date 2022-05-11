import { useParams } from 'react-router-dom'
import { useSinglePost } from '../../hooks/useSinglePost';
import '../create/create.css';
import '../edit/edit.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { MdOutlineSubtitles } from 'react-icons/md'
import { GrView } from 'react-icons/gr'
import { AiOutlineSend } from 'react-icons/ai'
import { useCreatePost } from '../../hooks/useCreatePost';
import { ErrorContext } from '../../contexs/ErrorProvider';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import { AuthContext } from '../../contexs/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEditPost } from '../../hooks/useEditPost';
import { Loading } from '../../components/loading/Loading';
import { SuccessAlert } from '../../components/alerts/SuccessAlert';


export const Edit = () => {
    const params = useParams();
    const [title, setTitle] = useState('');
    const editorRef = useRef(null);
    const { editPost, success, loading } = useEditPost();
    const auth = useContext(AuthContext);
    const error = useContext(ErrorContext);
    let navigate = useNavigate();
    let location = useLocation();

    const log = () => {
        if (editorRef.current) {
          editPost(params.id, title, editorRef.current.getContent());
    
        }
  };
  
  useEffect(() => {
    console.log(location)

    if (location.state) {
      setTitle(location.state.initialTitle);
    }
  }, [location]);
      
    const preview = () => {
        if (editorRef.current) {
      
            auth.setPreviewPost({
                title,
                content: editorRef.current.getContent(),
                author: auth.user,
                date: Date.now(),
            });
          navigate(`/editpreview/${params.id}`);
    
        }
  };
  if (loading) {
    return (
      <Loading type='spin' className='edit-loading' color='#e38e45' />
    )
  }
  
  if (success) {
    return (
      <div className='create'>
      <SuccessAlert msg='Successfully Edited !' />

      </div>
    )
  }

  return (
    <div className='create'>
      <div className='title-input-container'> 
        <label className='title-label' htmlFor='title'> <MdOutlineSubtitles className='title-icon' /> Title </label>
        <input onChange={(e) => setTitle(e.target.value)} type='text'  value={title} name='title' className='title-input' />
        <div>
        </div>   
      </div>
      
      <Editor
        apiKey='herl3h2vgt02v0p3ze0d5qnllrl03sibj9zsye4z8u5jjoyj'
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue={location.state ? location.state.initialContent :"<p>This is the initial content of the editor.</p>"}
         init={{
           height: 400,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
      />
      <div className='editor-buttons'>
      <button className='preview-editor' onClick={preview}> <GrView className='editor-icon preview' />  </button>
      <button className='submit-editor' onClick={log}> <AiOutlineSend className='editor-icon send' /> </button>
 
      </div>
      {error.errors ? <div className='error-container'>
        {error.errors.map(err => <ErrorAlert err={err} key={err.id} />)}
      </div> : null}
      
    </div>
  )
}
