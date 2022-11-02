import React from 'react'

import './SingleProjectBox.css'

const SingleProjectBox = ({ name, singer, img, audio }) => {
  return (
    <div className='single__project__box'>
      <div className='project__img__container'>
        <img className='project__img' src={img || ''} alt="" />
      </div>
      <span className='project__name'>{name}</span>
      <audio src={audio} type='audio'  controls/>
      {/* <p className='project__signer'>{singer}</p> */}
    </div>
  )
}

export default SingleProjectBox