import React, { useEffect } from 'react'
import Categories from '../../components/Categories'
import Clients from '../../components/Clients'
import DigitalMedia from '../../components/DigitalMedia'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/images/headerlogowhite.png'
import MainHero from '../../components/MainHero'
import OtherServices from '../../components/OtherServices'
import PhotographyTeam from '../../components/PhotographyTeam'
import WhyUs from '../../components/WhyUs'

import './Home.css'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const links =[
    {
      id: 2,
      text: 'Why Us',
      section: 'WhyUs-section'
    },
    {
      id: 3,
      text: 'Our Clients',
      section: 'clients'
    },
    {
      id: 5,
      text: 'Our Team',
      section: 'our-team'
    },
  ];

  return (
    <div className='home__page'>
      <Header 
        page='home' 
        logo={Logo} 
        links={links} 
        booking={{text: 'Contact Us', endpoint: '/contact-us'}}
      />
      <MainHero />
      <Categories id='categories-section' />
      <WhyUs id='WhyUs-section' />
      <OtherServices />
      <DigitalMedia id='our-categories' />
      <Clients id='clients' />
      <PhotographyTeam type='home' id='our-team' />
      <Footer type='home' links={links} />
    </div>
  )
}

export default Home