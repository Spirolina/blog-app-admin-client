import React from 'react'
import ReactLoading from 'react-loading';

export const Loading = ({type, color, className}) => {
  return (
    <ReactLoading type={type} className={className} color={color} height={'10%'} width={'10%'}  />
  )
}
