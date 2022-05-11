import '../buttons/buttons.css'
import React from 'react'
import {IoAddCircle} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const CreateButton = () => {
  const navigate = useNavigate();

  return (
          <IoAddCircle onClick={() => navigate('/create')} className='create-button'/>
  )
}
