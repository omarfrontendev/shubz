import React, { useEffect } from 'react'
import Slider from "react-slick";
import SingleProjectBox from '../SingleProjectBox';
import Image from '../images/bg_projects.jpg';
import Button from '../UI/Button';
import { MusicIcon } from '../UI/icons';
import Aos from "aos";

import "aos/dist/aos.css";
import './OurProjects.css'

const OurProjects = ({ id }) => {

  const projects = [
    {
      id:1,
      name: 'PodCast',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9749gjk.jpg?alt=media&token=9e56d8dd-49e4-4a3d-9842-42370decec69',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%202.mpeg?alt=media&token=d0135abc-0a50-47d1-a8b3-e72e07eb1443'
    },
    {
      id:2,
      name: 'Radio Jingles',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9868.jpg?alt=media&token=8425c0c3-6578-4253-b1cb-6fee228a991a',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%201.mpeg?alt=media&token=2faf8eac-66ea-4b81-a59e-ce777f882413'
    },
    {
      id:3,
      name: 'dream on',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2Fdream%20on.mp3?alt=media&token=d410d001-0df9-4451-b35a-a5925c58cb0c'
    },
    {
      id:4,
      name: 'Jubilee syringe ',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9742.jpg?alt=media&token=6ac5d90f-d5fd-47ad-887a-d957606bbc8b',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FJubilee%20syringe%20.mp3?alt=media&token=f9a2f971-a2ff-47de-bb82-d10f39e27266'
    },
    {
      id:5,
      name: 'Say Yes',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9983.jpg?alt=media&token=58715c38-5e13-4434-aba4-c48270abb863',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FsAY%20yES.mp3?alt=media&token=deff65cd-888a-4472-9e34-9df6aa4d66dc'
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id={id} className='our__project__section'>
      <div className="container">
        <img className='image__bgk' src={Image} alt='' />
        <h2 data-aos="fade-up" className='section__title'>Our Projects</h2>
        <p data-aos="fade-up" className='our__project__subtitle'>We are very proud of our client base and the lasting relationships we have forged over many years.</p>
        <div data-aos="fade-up">
          <Slider {...settings}>
            {projects.map(project => (
              <SingleProjectBox 
                key={project.id}
                name={project.name}
                singer={project.singer}
                img={project.img}
                audio={project.audio}
                className='our__porject__slider'
                />
                ))}
          </Slider>
          <Button>
            <div className="ourproject__btn">
              <MusicIcon />
              view all projects
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default OurProjects