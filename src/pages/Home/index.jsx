import React, { useEffect } from 'react'
import Categories from '../../components/Categories'
import Clients from '../../components/Clients'
import DigitalMedia from '../../components/DigitalMedia'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/images/headerlogowhite.png'
import MainHero from '../../components/MainHero'
import OtherServices from '../../components/OtherServices'
import PhotographyBlogs from '../../components/PhotographyBlogs'
import PhotographyTeam from '../../components/PhotographyTeam'
import Wanted from '../../components/Wanted'
import WhyUs from '../../components/WhyUs'

import './Home.css'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const links = [
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
    {
      id: 5,
      text: 'Blogs',
      section: 'news'
    },
  ];
  const lastestNews = [
    {
      id: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbasumoh%202.jpg?alt=media&token=3203acdf-8ba6-46cd-9942-c3e67fa77534',
      title: 'basumoh',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…'
    },
    {
      id: 5,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Flatonnes%201.jpg?alt=media&token=1e14a660-b6d2-4852-a8bb-8bb9ea9eb626',
      title: 'latonnes',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…'
    },
    {
      id: 6,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fnetima1.jpg?alt=media&token=3dfd814b-f8b7-4d42-8321-2f60404d3352',
      title: 'netima',
      date: 'JUNE 6, 2016',
      desc: 'The final parts of Spitfire’s Studio Orchestra Library are released…'
    }
  ];

  return (
    <div className='home__page'>
      <Header
        page='home'
        logo={Logo}
        links={links}
        booking={{ text: 'Contact Us', endpoint: '/contact-us' }}
      />
      <MainHero />
      <Categories id='categories-section' />
      <WhyUs id='WhyUs-section' />
      <OtherServices />
      <DigitalMedia id='our-categories' />
      <Clients id='clients' />
      <Wanted />
      <PhotographyBlogs id='news' data={lastestNews} title='Latest News' subtitle='Find out about everything happening here at Voicer. Keep an eye out here for all of our upcoming events' />
      <PhotographyTeam type='home' id='our-team' />
      <Footer type='home' links={links} />
    </div>
  )
}

export default Home