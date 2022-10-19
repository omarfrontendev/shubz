import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import MovieCard from '../../components/MovieCard'
import Button from '../../components/UI/Button'
import WeddingSection from '../../components/WeddingSection'
import Logo from '../../components/images/tvwhite.png'
import Video from '../../components/Video'
import Aos from "aos";
import Banner2 from '../../components/images/Photography/banner/3.jpg'

import "aos/dist/aos.css";
import './Filming.css'

const Filming = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
    window.scrollTo(0,0);
  }, []);

  const movies = [
    {
      id: 1,
      img: 'https://shubz.org/wp-content/themes/shubz-visuals/images/wedding-banner.jpg',
      name: 'Wedding Filming',
      // rating: 4.8,
      // date: 2018,
      // duration: '1hr 21min',
      // category: 'Weedings',
      desc: 'Are You Engaged? Delight Your Weddings With the best photography + cinematography for brides and grooms'
    },
    {
      id: 2,
      img: 'https://shubz.org/wp-content/themes/shubz-visuals/images/music-video-banner.png',
      name: 'Music Video',
      // rating: 8.6,
      // date: 2020,
      // duration: '1hr 33min',
      // category: 'ADS',
      desc: "HOW TO GET MORE AMAZING FANS WITH MUSIC VIDEO FOR MUSICIANS"
    },
    {
      id: 3,
      img: Banner2,
      name: 'Film Production',
      // rating: 7.3,
      // date: 2019,
      // duration: '1hr 45min',
      // category: 'War',
      desc: 'TOP MOST AFRICAN TALENT FILM PRODUCTION, Watch best of African Art, Films, and TV Shows'
    },
  ];

  const music = [
    {
      id: 1,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-music%2FTRIAL____________Na%20So%20-%20Wyllz%20master%20HD.m2ts?alt=media&token=23157987-0076-4337-8612-d2c0d3a68cd1',
      name: 'Na So - Wyllz master HD',
      rating: 7.1,
      type: 'Music Videos'
    },
    {
      id: 2,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-music%2FTRIAL____________Utibe%20Ima%20-%20Wyllz%20master%20HD.m2ts?alt=media&token=dc80ac86-44c5-4c6b-ad2a-191e5c32b4dc',
      name: 'Utibe Ima - Wyllz master HD',
      rating: 7.1,
      type: 'Music Videos'
    },
    {
      id: 3,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-music%2FTRIAL____________peace%20final%20mhd.m2ts?alt=media&token=2a8d9bf1-0ad3-4095-b641-fca6093e8ea5',
      name: 'peace final mhd',
      rating: 7.1,
      type: 'Music Videos'
    }
  ];

  const allMovies = [
    {
      id: 2,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fmain%20montage%20new.mp4?alt=media&token=04b268f9-98dc-4b30-ad3d-e6025b316aa6',
      name: 'Montage',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'TV Shows',
    },
    {
      id: 3,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2FYou%20are%20watching%20cor%201.mp4?alt=media&token=7dacf2ef-9ef3-4f3f-956a-14bf69ebdf8b',
      name: 'UMO ENO TV',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'TV Shows',
    },
    {
      id: 4,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fbasumoh.mp4?alt=media&token=a2ac3d05-b3ae-4aef-b00b-7fa24bfb9779',
      name: 'Basumoh',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 5,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fblow%20pos.mp4?alt=media&token=6fc51ba2-ac74-47ba-adc5-c22a6565dad4',
      name: 'Blow Pos',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 6,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2FKetiano.mp4?alt=media&token=fd57b22b-b64e-4f3d-9bb7-c03eb9bf1455',
      name: 'Ketiano',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 7,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2FLATONNE%20SIGNATURES.mp4?alt=media&token=aee320bb-a677-4722-9ea4-cb9e6986eb48',
      name: 'LATONNE SIGNATURES',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 8,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2FWestgate%20fhd.mp4?alt=media&token=9236340e-72c5-4e6f-8d3e-2d15b89a18b6',
      name: 'Westgate fhd',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
    {
      id: 9,
      src: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-videos%2Fmade%20in%20aks.mp4?alt=media&token=4cedfc90-aea8-472b-a93b-af5ea0cda2eb',
      name: 'made in aks',
      rating: 4.8,
      date: 2018,
      duration: '1hr 21min',
      category: 'Video Ads',
    },
  ];

  const headerLinks = [
    {
      id: 1,
      text: 'Weddings',
      section: 'wedding' 
    },
    {
      id: 2,
      text: 'Music',
      section: 'music' 
    },
    {
      id: 3,
      text: 'Movies',
      section: 'movies' 
    }
  ];

  return (
    <div className='tv__page'>
      <Header page='tv' logo={Logo} links={headerLinks} />
      <HeroSection page='tv' data={movies} />
      <WeddingSection id='wedding' />
      <section className='filming__section movies' id='movies'>
        <div className="container">
          <h2 className='section__title tv'>Watch <span>Movies</span></h2>
          <div className="cards__container" data-aos="fade-up">
            {allMovies.map(m => (
              <MovieCard 
                key={m.id}
                video={m.src}
                name={m.name}
                rating={m.rating}
                date={m.date}
                category={m.category}
              />
            ))}
          </div>
          <Button page='tv'>Show All Movies</Button>
        </div>
      </section>  
      <Video video='https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-music%2FTRIAL____________THE%20FISHER%20MAN%20MAKING.m2ts?alt=media&token=2922413b-6098-441d-b413-fb8f99653c83' />
      <section className='filming__section' id='music'>
        <div className="container">
          <h2 className='section__title tv'>Listen And Watch <span>Music</span></h2>
          <div className="cards__container" data-aos="fade-up">
            {music.map(m => (
              <MovieCard 
                key={m.id}
                video={m.src}
                name={m.name}
                rating={m.rating}
                type={m.type}
                music={true}
              />
            ))}
          </div>
          <Button page='tv'>Show All Music</Button>
        </div>
      </section>
      <Footer type='TV/FILM' links={headerLinks} />
    </div>
  )
}

export default Filming