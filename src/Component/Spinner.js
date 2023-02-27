
import React from 'react'
import loading from './Misterious mist.gif'

const spinner = (props) => {
  return (
    <div className='text-center'>
      <img src={loading} alt="Loading" />
    </div>
  )
}

export default spinner
