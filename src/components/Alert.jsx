import React from 'react'

const Alert = () => {
  return (
    <div className='alert-component'>
        <div className='alert-control'>
            <i class="fa-solid fa-circle-check check-icon"></i>
            <h3>Book added to your cart</h3>
            <i class="fa-regular fa-circle-xmark close-icon"></i>
        </div>
    </div>
  )
}

export default Alert