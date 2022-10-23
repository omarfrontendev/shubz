import React from 'react'
import Button from '../UI/Button'
import Image from '../images/hero.jpeg'

import './MainHero.css'

const MainHero = () => {
  return (
    <section className='main__hero'>
      <div className="container">
        <div className="main__hero__content">
          <div className="hero__text__content">
            <h1><span>AFRICA URBAN CREATIVE DIGITAL MEDIA</span></h1>
            <p>We Produce & Sell Anything Audio, Image and Video used to promote sales, educate and entertain your audience worldwide.</p>
            <Button page='home'>Let’s Partner</Button>
          </div>
          <div className="hero__image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainHero