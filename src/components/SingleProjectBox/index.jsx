import React from 'react'

import './SingleProjectBox.css'

const SingleProjectBox = ({ name, img, audio }) => {
  return (
    <div className='single__project__box'>
      <div className='project__img__container'>
        <img className='project__img' src={img || ''} alt="" />
      </div>
      <span className='project__name'>{name}</span>
      <audio controls>
        <source src={'http://docs.google.com/uc?export=open&amp;id=1uZd99P8_xWM3fYsoSl4xHa8md2MWHa68'} type='audio/mp3' />
      </audio>
      {/* <p className='project__signer'>{singer}</p> */}
    </div>
  )
}

export default SingleProjectBox;