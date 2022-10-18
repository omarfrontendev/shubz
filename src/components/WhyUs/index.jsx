import React from 'react'

import './why_us.css'

export default function WhyUs({ id }) {
  return (
    <div className='why__us__section' id={id}>
      <div className="container">
        <div className="why__us__content">
          <div>
            <div className="why__us__content__text">
                <img src="https://shubz.org/wp-content/themes/shubz-visuals/images/logos/shubz-visuals-white.png" alt="" />
              </div>
              <div className="why__text">
                <h2 className='section__title'>We Are The <span>Best</span></h2>
                <p className='why__us__p'>With a team consisting of some of Nigeria's most talented filmmakers we capture your vision and turn it into a mind blowing film/video. Our experience in the exciting African film market, our team brings not only passion and talent, but also in-depth professional knowledge. </p>
              </div>
          </div>
          {/* <div>
            <div className="why__us__content__text">
                <img src="https://shubz.org/wp-content/themes/shubz-visuals/images/team-2.jpg" alt="" />
              </div>
              <div className="why__text">
                <h2 className='section__title'>We're Experienced, Artistry, Passionate, Reliable and Professional</h2>
                <p className='why__us__p'>With a team consisting of some of Nigeria's most talented filmmakers we capture your vision and turn it into a mind blowing film/video. Our experience in the exciting African film market, our team brings not only passion and talent, but also in-depth professional knowledge. </p>
              </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
