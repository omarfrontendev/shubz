import React, { useEffect } from 'react'
// import image1 from '../images/Photography/basumoh 2.jpg'
// import image2 from '../images/Photography/champ mani 2.jpg'
// import image3 from '../images/Photography/85bc0215-a28b-4d95-9f6a-a775a432e3c7.jpg'
// import image4 from '../images/Photography/katiano.jpg'
// import image5 from '../images/Photography/latonnes 1.jpg'
// import image6 from '../images/Photography/netima1.jpg'
// import image7 from '../images/Photography/bridal huz.jpg'
// import image8 from '../images/Photography/tin.jpg'
// import image9 from '../images/Photography/westgate.jpg'
import Aos from "aos";

import "aos/dist/aos.css";
import './PhotographyBlogs.css'

const PhotographyBlogs = ({ id }) => {

  const blogs = [
    {
      id: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbasumoh%202.jpg?alt=media&token=3203acdf-8ba6-46cd-9942-c3e67fa77534',
      title: 'basumoh',
      date: 'JUNE 6, 2016'
    },
    {
      id: 2,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fchamp%20mani%202.jpg?alt=media&token=21c44612-a283-47cc-98a7-600bd0d7f8f0',
      title: 'champion',
      date: 'JUNE 6, 2016'
    },
    {
      id: 3,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F85bc0215-a28b-4d95-9f6a-a775a432e3c7.jpg?alt=media&token=2defa4cf-3aca-4f10-ac90-f51eb116357e',
      title: 'Mock Up',
      date: 'JUNE 6, 2016'
    },
    {
      id: 4,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2FIMG-20220628-WA0005.jpg?alt=media&token=89980e1a-27ae-4374-aec5-43166b81a5b6',
      title: 'katiano',
      date: 'JUNE 6, 2016'
    },
    {
      id: 5,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Flatonnes%201.jpg?alt=media&token=1e14a660-b6d2-4852-a8bb-8bb9ea9eb626',
      title: 'latonnes',
      date: 'JUNE 6, 2016'
    },
    {
      id: 6,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fnetima1.jpg?alt=media&token=3dfd814b-f8b7-4d42-8321-2f60404d3352',
      title: 'netima',
      date: 'JUNE 6, 2016'
    },
    {
      id: 7,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbridal%20huz.jpg?alt=media&token=b2488214-85ac-4a09-b9f6-e3d11c1579e4',
      title: 'sweet bride',
      date: 'JUNE 6, 2016'
    },
    {
      id: 8,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Ftinaries.jpg?alt=media&token=96f1327f-86c6-4484-bb5d-3f45c08dd12d',
      title: 'tinaries',
      date: 'JUNE 6, 2016'
    },
    {
      id: 9,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fwestgate.jpg?alt=media&token=71fe1db8-549c-4540-971d-d12ac2015467',
      title: 'westgate',
      date: 'JUNE 6, 2016'
    },
  ];

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='photography__blogs' id={id}>
      <div className="container">
        <h2 data-aos="fade-up" className="section__title ph">Graphics</h2>
        {/* <p data-aos="fade-up" className='section__subtitle'>ARTICLE, NEWS, TIPS</p> */}
        <div className="blogs__container">
          {blogs.map((b, i) => (
            <div 
              key={b.id}
              className='blog__box'
              data-aos="fade-up"
              data-aos-delay={`${i}00`}
            >
              <div>
                <img src={b.img} alt="" />
              </div>
              <h3><span>{b.title}</span></h3>
              <span>{b.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotographyBlogs