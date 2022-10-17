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
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9749gjk.jpg?alt=media&token=c1fd28fc-9dc8-413c-9509-5f15eb3ca333',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%202.mpeg?alt=media&token=d0135abc-0a50-47d1-a8b3-e72e07eb1443'
    },
    {
      id:2,
      name: 'Radio Jingles',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9868.jpg?alt=media&token=248acaf0-99ee-41ec-9a2c-94474c6d6998',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%201.mpeg?alt=media&token=2faf8eac-66ea-4b81-a59e-ce777f882413'
    },
    {
      id:3,
      name: 'dream on',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=40a7f71d-cfbc-4b4b-bdde-70e5623dea3c',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2Fdream%20on.mp3?alt=media&token=d410d001-0df9-4451-b35a-a5925c58cb0c'
    },
    {
      id:4,
      name: 'Jubilee syringe ',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9983.jpg?alt=media&token=14b30de2-fd14-40aa-88b7-8a6635598dbc',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FJubilee%20syringe%20.mp3?alt=media&token=f9a2f971-a2ff-47de-bb82-d10f39e27266'
    },
    {
      id:5,
      name: 'Say Yes',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9868.jpg?alt=media&token=248acaf0-99ee-41ec-9a2c-94474c6d6998',
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