import React, { useEffect, useState } from 'react'
import Aos from "aos";
import { TbArrowsDiagonal } from 'react-icons/tb'
import Button from '../UI/Button';
import MainSlider from '../MainSlider';
// import Image1 from '../images/Photography/1.jpg'
// import Image2 from '../images/Photography/2.jpg'
// import Image3 from '../images/Photography/3.jpg'
// import Image4 from '../images/Photography/4.jpg'
// import Image5 from '../images/Photography/5.jpg'
// import Image6 from '../images/Photography/6.jpg'
// import Image8 from '../images/Photography/8.jpg'
// import Image9 from '../images/Photography/9.jpg'
// import Image10 from '../images/Photography/10.jpg'
// import Image11 from '../images/Photography/11.jpg'
// import Image12 from '../images/Photography/12.jpg'
// import Image13 from '../images/Photography/13.jpg'

import "aos/dist/aos.css";
import './OurPhotographyWorks.css'

const OurPhotographyWorks = ({ id }) => {

  const [all, setAll] = useState(false);
  const [openSlider, setOpenSider] = useState(false);
  const [img, setImage] = useState('');
 
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const works = [
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F1.jpg?alt=media&token=1585d4fc-7288-4b84-9cbd-516058fdb6a3',
      delay: '0'
    },
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F11.jpg?alt=media&token=dc344efc-8db6-4f22-8505-73abb50563f0',

    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F13.jpg?alt=media&token=50e48602-c68c-47ec-ac0b-b4782b6241ed  ',
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F17.jpg?alt=media&token=2e241c0d-4221-4204-8b8d-0431f51f05cc',
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F3.jpg?alt=media&token=04aeaa7b-ad00-4771-8139-ae2822ebf37f',
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F21.JPG?alt=media&token=012f0c36-2ab9-4ed0-9be2-b40087f542d8',
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F24.JPG?alt=media&token=06125269-2e06-483b-8503-8ac15e17eb71',
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F4.jpg?alt=media&token=d0fac438-c8f8-44fc-9208-24c321e33f1d',
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F60.jpg?alt=media&token=1598b31b-1c20-4baf-93da-410886e208d7',
    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F8.jpg?alt=media&token=3e272825-3f99-4c76-bf9a-b70f7bfb604a',
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F61.jpg?alt=media&token=8b8a2206-b889-4271-9553-b2975a81e721',
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F44.JPG?alt=media&token=ac104153-0b2c-4904-8e66-4bb67f9738c4',
    },
  ];

  return (
    <>
      <section className='photography__works__section' id={id}>
        <div className="ph__works__title" data-aos="fade-right">
          <h2 className="section__title ph">OUR WORKS</h2>
          <p className='ph__works__subtitle'>FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THEOCEAN.</p>
          <Button page='photography'>VIEW ALL WORKS</Button>
        </div>
        <div style={{overflow: 'hidden'}}>
          <div className="works__imgs__container">
            {works.slice(0, `${all ? works.length : 6}`).map(w => (
              <div
                key={w.id}
                className='work__box'
                data-aos="fade-up"
                data-aos-delay={w.delay}
              >
                <img src={w.img} alt="" />
                <div>
                  <button onClick={() => {
                      setOpenSider(prev => !prev)
                      setImage(w.img)
                    }}
                  >
                    <TbArrowsDiagonal className='resize__icon' />
                  </button>
                  <h4>{w.title}</h4>
                  <span>{w.type}</span>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setAll(prev => !prev)} 
            data-aos="fade-up" 
            data-aos-duration='600' 
            className='load__more__btn'
          >
            {all ? 'LESS' : 'LOAD MORE'}
          </button>
        </div>
      </section>
      {openSlider && <MainSlider img={img} setOpenSider={setOpenSider} />}
    </>
  )
}

export default OurPhotographyWorks