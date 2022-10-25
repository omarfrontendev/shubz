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

const PhotographyBlogs = ({ id, data, subtitle, title }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='photography__blogs' id={id}>
      <div className="container">
        <h2 data-aos="fade-up" className="section__title ph">{title}</h2>
        {subtitle && <p data-aos="fade-up" className='section__subtitle'>{subtitle}</p>}
        <div className="blogs__container">
          {data.map((b, i) => (
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
              <p className='news__desc'>{b.desc}</p>
              <span>{b.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotographyBlogs