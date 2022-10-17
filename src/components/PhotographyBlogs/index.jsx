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
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbasumoh%202.jpg?alt=media&token=2a6a4322-6638-4b15-904f-1a112a0465a0',
      title: 'basumoh',
      date: 'JUNE 6, 2016'
    },
    {
      id: 2,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fchamp%20mani%202.jpg?alt=media&token=1f2a8fa1-0ad2-4e9a-a9a7-860f70325f04',
      title: 'champion',
      date: 'JUNE 6, 2016'
    },
    {
      id: 3,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2F85bc0215-a28b-4d95-9f6a-a775a432e3c7.jpg?alt=media&token=cb483c8f-80e5-41df-961e-69947d7f8cc8',
      title: 'Mock Up',
      date: 'JUNE 6, 2016'
    },
    {
      id: 4,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fkatiano.jpg?alt=media&token=e8445808-b0b1-4777-b354-8f3805a99dc2',
      title: 'katiano',
      date: 'JUNE 6, 2016'
    },
    {
      id: 5,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Flatonnes%201.jpg?alt=media&token=d57d7b06-bea9-4913-8d94-04df956ed4fa',
      title: 'latonnes',
      date: 'JUNE 6, 2016'
    },
    {
      id: 6,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fnetima1.jpg?alt=media&token=382b9ced-ebd6-401e-b72a-e5ef547bc68d',
      title: 'netima',
      date: 'JUNE 6, 2016'
    },
    {
      id: 7,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fbridal%20huz.jpg?alt=media&token=026923a1-e432-4184-bbfb-619aa11acb03',
      title: 'sweet bride',
      date: 'JUNE 6, 2016'
    },
    {
      id: 8,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Ftin.jpg?alt=media&token=04b868db-1dbf-4c6b-a749-0d134556a5d0',
      title: 'tinaries',
      date: 'JUNE 6, 2016'
    },
    {
      id: 9,
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-images%2Fwestgate.jpg?alt=media&token=d2fcd26e-8cfc-4cc7-bd32-2bdddec6dbc5',
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