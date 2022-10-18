import React, { useEffect, useState } from 'react'
import Aos from "aos";
import { TbArrowsDiagonal } from 'react-icons/tb'
import Button from '../UI/Button';
import MainSlider from '../MainSlider';

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
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Ftest.jpg?alt=media&token=0e427b49-e331-4fd8-b539-83587b4754fd',
      delay: '0'
    },
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbenita.jpg?alt=media&token=765bd483-c225-4104-a068-c4a7260445e1',

    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0899.jpg?alt=media&token=7188447e-243d-424e-89a6-9dfef98b25e0',
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0467.jpg?alt=media&token=a49f9545-03a5-4e87-850e-3f1a4988dca2',
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0850.jpg?alt=media&token=ba0442c6-0e14-42c0-94bb-76a9c9ba1b21',
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FRetouch_.jpg?alt=media&token=821191f4-05a5-4253-bc87-2fb5063b77b0',
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0473.jpg?alt=media&token=24442f91-b713-49d1-b287-7e08a56c3bd0',
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0471.jpg?alt=media&token=e94441c8-919b-4188-89a5-7a9276d9f53b',
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fportrait.jpg?alt=media&token=98ff9a65-edac-4bc8-96ff-1a30143b36c1',
    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0470.jpg?alt=media&token=f85a1639-6054-4ba3-b706-8b58910c5c53',
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0890.jpg?alt=media&token=010e938e-3aff-458c-889f-3f7efb59cb77',
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FSpartan.jpg?alt=media&token=9a4aaa15-6e33-4e1f-9f97-0ca4975dfc7c',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG_0465.jpg?alt=media&token=9ee83b8e-f9f4-4959-a0a4-b0e9677070bf',
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