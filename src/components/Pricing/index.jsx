import React, { useEffect } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { BiDollar } from 'react-icons/bi'
import Aos from "aos";

import "aos/dist/aos.css";
import './Pricing.css'

const Pricing = ({ prices, id, page }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='pricing__section' id={id}>
      <div className="container">
        <h2 className={`section__title ${page}`} data-aos="fade-up">Pricing Table</h2>
        <div className='pricing__content'>
          {prices.map((price, i) => (
            <div 
              className={`price__box ${price.popular ? 'popular' : ''} ${page}`} key={price.id}
              data-aos="fade-up"
              data-aos-delay={`${i}00`}
            >
              {price.popular && <div className='popular'>Popular</div>}
              <h3>{price.title}</h3>
              <span>{price.subtitle}</span>
              <div className='price__box-price'><BiDollar className='dollar__icon' />{price.price}<span>/month</span></div>
              <ul className='price__benefits'>
                {price.benefits.map((b, i) => (
                  <li className='price__benefit' key={i}>
                    <BsCheck2All className='check__icon' /> {b}
                  </li>
                ))}
              </ul>
              <button className='choose__btn'>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing