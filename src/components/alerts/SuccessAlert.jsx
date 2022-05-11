import React from 'react'
import "../alerts/success-alert.css"

export const SuccessAlert = ( {msg} ) => {
  return (
      <div className='success-alert'>
          {msg}
    </div>
  )
}
