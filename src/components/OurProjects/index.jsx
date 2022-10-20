import React, { useEffect } from 'react'
import Slider from "react-slick";
import SingleProjectBox from '../SingleProjectBox';
import Image from '../images/bg_projects.jpg';
import Button from '../UI/Button';
import { MusicIcon } from '../UI/icons';
import Audio1 from '../Audios/AFLEN 2.mpeg'
import Audio2 from '../Audios/AFLEN 1.mpeg'
import Audio3 from '../Audios/dream on.mp3'
import Audio4 from '../Audios/NEW.wav'
import Audio5 from '../Audios/sAY yES.mp3'
import Aos from "aos";

import "aos/dist/aos.css";
import './OurProjects.css'

const OurProjects = ({ id }) => {

  const projects = [
    {
      id:1,
      name: 'PodCast',
      img: 'https://lh3.googleusercontent.com/hI-NHX43sGPd8svvzQKdWVenmI_FTqj6SNC92atw-SNbEDd44uatR9hLEyvzrWMqM9_dk5xkWtEr17sjIC7T82Efr7igQsECfo3tFN7qOtbmLUFflL61B2wGIOKRCj-pdYGXxiCxvecMPrUWLJScnqJWOZhnKS5AHjdzNAJ5TwbUEsxyeF9vWhiIC79vcrVU7ig7CO_uo7oOnIo6Tttntdh0NTyqoKRzYg8r2zccrTZZFYefzT_JWYuignZKaZsC8Kpa2ILneQjro2R05YWcRhwpCtgXceO-gSrd9R3CHm_Ng1zrjFJB4ApxnM1S52RRcSsGHGTr5LOIMQPomwV8XNNTxFo-KUzAWFdsJ02EgUhk1TSC5e300L4sPtt-9o1B9At72z243aWQkM4COp7mH_htkNZP5qIQjH6RIib0qHyOafEuNbopMCWOS5PZf4dGs8hK2bEWRNmWgHDqLIoHyku4JJl0KOUYdWqx6TIQma2QHNUt7gG38ytKtY5r5dcMjQv0DToqy9qjHDEYLoZ4IKvUKofyOH78eyqbhldrtjCQYLQz6p-nLqdKWwvn7beC0D4nhjiMeBi69nSTUeDPJravH1P7C8Px6Gd2J-cx0bkMowGi0RLRM79XlyMOSTkCkYPDYHpe8r3KU4YR0m7nOPVQK9aFtO1G2y52wZakgdXS3vwshMlKnlsGF8oRLEamIItdmCSxyniRdmw2CBSGfGegxR4_3QcEdn5vhaO3SwF13MU2iXaN_ZPkGr8F-q2ZGMHbYh__Uy8hrdiyPmMDoaZHuzHBvdWharBy2XwZVlL-istrNXEXhPQrHfelNjbfstnTRNt_XeKS32YhyQPATBacHwIvjDmpTnTTUjTMRSr_G1FBSAZM6ABVRWi0RBUVm14xDpnRuZSSGF8OB5I53GFfmO1NHbzQgdBIquk=w991-h668-no?authuser=0',
      audio: Audio1
    },
    {
      id:2,
      name: 'Radio Jingles',
      img: 'https://lh3.googleusercontent.com/lLbJwKqR-xdUvlAbGwvRe9rZAfQIsVWVtKvpfnYc1sfe_ayESiIzX2Tu7ri3AJoLABvYb2EdR51u-Aply1goyBpgMMaUHfI9ZfpV5Hm8B1ivwuIsevt9hAsCdu_Kr2zZgLa3c2I1oJMbF3cpZka6_VZLRcRAzuJyPBDbmVF0Nud2u6VZPrkVGKcLfoHVCsNTqLxndTij1NMLqnXhiR8g33FCk6ulyggUcNRm9PUMcVTkhD9cFbi9BzFzmWOVBr25gc-O94bUGybfztEDojDl-gjOq6Wg6ayCuCCAY-sNjdxEcXQ2cTed8Kzau0mYt0YUl0qQ8ZvqhfOOYRfSf2PiHyyP4uzSZa6hFmHvtZM0v8Rhebh2Dh2X7o0sazXcljLymla9FOXngq3aCbZNFG1QVfnELOrtFVGxelHZmbKkXVWndwCd2Uf6UuWG_hu5G54jex6r2djIEZOR6EunKd0rsI9WzoUnkPkLBSjCqSwvGjNKFMmAPRfLReUYO7q23Vjw93Q3ntoP1jIj-z5CeW9b1sbjwhW9GWRINPq6Pp5FKI_oC1yTH_OUr7jtgOudqWNLuaUgjXESVZ-TedwEVy9ecr2Q1cHFsscqK29n0q5BrVElGIN6WIJnKFW5DAeevD_iNuiLQbAhBWwgaXgsXebp4Bz0F63d8774i3YF7MY54sP2De9VtxJOEHXPoKrgHp-sQy0XvZpcl6QhfBBhCYfWzK7S3KlWZXFUdp8Qf9iV_Z5Vs3VpbqjuxV1_Nrh17LNPS46_Cd815JSGq4M6S826MPWKlI_vXO4bJrwWstUjNbTxPWnhrNjP1zi1LK8TKO8oEPflJ1YL9aWhp7NDojwtoW2i2ZEo2WCv2ggf603SDAoutvz5R5bB67YhzAq9Lww52BzPSMGrl8NBtdbWNUDxDZr4RWk6RUqDrVb6kB0=w950-h667-no?authuser=0',
      audio: Audio2
    },
    {
      id:3,
      name: 'dream on',
      img: 'https://lh3.googleusercontent.com/WIRsJGl4UuNTyl_7TURvbj05phpVemKWBg2LxMjKQV5Bx2_9uGnOtCBpCtyt8vN4E4meBn3fmciXfgHjNFddXjympyp1hRLzMe9xBObPorgP0q0BlnnTbzn7V-OAAAwpZ3dSh9n0_SAQpLwd79qcg6B-eEdtXl9ZGZY4mjebiAageZylwQlOuapLi9PxBjzkhObfx9zMCNuTg7BoOATiO92H9HajKvhAe3pbxq2u-2oIDT8US_SwqUVQK_B22aFOruBAt2W0S2GrcLUVOHxuZJq89VGOCTuYRFo1EmHpeTj-rSs1v_KGbL0Ugp9jx1HW5pSGCbZiejyqjkFfHaUa-dRCdP7t524rLXKtC3u3UH2CjEqGykY8b5I6oyq3g2Lm_Kc2ey8UiNyrMVgIQziT3pGVIXqTK6TnaVlQk5D2e9BzTfPkZefc1Z40I6TEWTWJdUayg-6kiODc5Q8c-l6OCFTid7nxLFcfL9wAP00v11rcRMKFi5mMaORnRzVFrrpJzXhYjfmjUgJxGy-lftllu09LIA3T3bm3Zt0Q2BvobqsMuDK-yiEyyM_2y77WMEY5Gu2wLwr117ETQmsiWtmhMOC5fEuK49iZvA2x2gaLbFloPVtmMjXrDRotOg2-R48u54990ypeznED8TKdEfHzz4N-erb8wDfzwIASkUwqFx032CmtiaoZS8jHjK-OSEmWcnb5dAYxcDUMQpOB2OToWS01xzoKOVVfphqGFOiEl4OtLcuQlcb76bbf7ez91T-BjFVHZ7VUDpGXdYWmKBtXhefJjHzZ-XaTlJaUNATPuip-TeS5Z1TlUaOhmrOizh9NQ73weVhtfFmAUTZTcX5rM105Lv3p2jGEiXFm9s_OP5P8x-Qyg_nQb71hTtEqQfqomGWY9u1LZeifayOccRbtg6M-MCzAnqguq7rxk4E=w772-h667-no?authuser=0',
      audio: Audio3
    },
    {
      id:4,
      name: 'NEW',
      img: 'https://lh3.googleusercontent.com/Cv9Gi5nJwXgLo-9Dtq60uPu-CBBeskof7Tk-YPNGHOHG6zA6m4w5tahwSZhb2OegKKmSK6jFFtDoCb8I0OIAkm4xrsM_L8nmDFiQNj1Mcl1KrFcJYk8QqRlAAdeIuAkISgQ-BoYM5t0H-Au64F36Fd1LO9UO96kW5u4W_aX_H20osPUplFJVN1oF9lzSZ0YuFCcZN8YbgJN5C3H6Lespo2Q0V7ZONxINPURm6oTGMYtDMRL6VaBjwzJzfVuhI2gw26YuYPqUFm95lytni_ypOv3Odad5WWDsO_sHKCI78kbObXLzqym1C-I0BX9Tsnfd9btOpjt1mqtyqSJXn54qtLq4GV4qTwWoEvi37g509CiDfaZ3VrChGVZX2FVQCvTf745Ckn2XAtZTM8HR1xpi1ocWLtN2tniY9z6QAE6zrmKaXgFz2yT7ZOs755R1rlIdktNODRiafgM8b45pL5naFrxDFfaBALKOI6kacUzyJhS54wies352NJ5M6VsRTMiTd8hR9PXsmKbR1Mdd_cTB2HBbM7ymDTj2avMWzumZuSmKvUVRSn04Lf0sXjmxSADwZUfMS-0iCo2LM4Yu7k7n4JTXg5atmpESQ_8sO9K5O4SxmVT0VRlNarLN8vW9uamY5ThCxQQvoXlBxRi2tuAR8iyKept_3AQ5nN6puCmmec6ik3poQpfrM-RlnfkJUalnl3yllIhz_8gEWsaXU4PaI5w3ywCXFMJux-dyDLhRGKngJsjSsKoUVgPWpgTpT5sa1KVLDYvDknHi1G_Ni1GgRmRb0B5A2sKPa5okthdoXW16loAo6k0c6yY0U1QHd1weNB-87OGoWe_uNXYsyqZ1WoNDjRRBBSzwv3KUMbxn2iHZisBs3eI8j1OgOXNMq4iABvXmKD5gaf7m8lPppgkkeMqGH3HmM6E50cgSZAo=w958-h667-no?authuser=0',
      audio: Audio4
    },
    {
      id:5,
      name: 'Say Yes',
      img: 'https://lh3.googleusercontent.com/z7KbkF5IE2XSMz9WY95cAczUPzU-AHtuQKkpH673pplD3sbKBkB_jek3mNsqbwrmfD9wCds9uoW20vrbFPk9J0KSUb4dpDtAURFuyMNfSqrSeA147hDiqxgXMmZSioYj0S4zxjhPQPidrTeQwkOs9J10U0U6dwjJFCIUF6RBMP1KHxZ_mrnWIxaokPXZ0XNNwQF_yG2-FyGX_WY9pzlQ45XrUXQ7SZtPUSR0-9ENk_1j6enN9oyby6_ivDpV2d8aV053oxdkcX_YrWj9Db4VfikmEwVymrf7thltQGMHIzc_PdA1E1lnqHqNA8i5UniadcENYCIoe51d93yI6Ey54DdOEGzHOt-vVrMCInPIpepBpZOlHNLZOHHZFSHF_beNvA5-EXeGYotmn4wr42ehbhtMqWX8G03hCaoVvjYujd71ExOoo1EdJ8gxr7ut5LvxRUWexcQCvn46B0Q7ymXbPYwpeHT2B6adUejz52uHbvtV6FUpSo55I3kISJ-YuaYFVbK6_E8p-8BgqJaCjpix8YY-6U6giFKo5XSWM-i1ur_attL9xeKHORPJ6FCkzkbCfMfiyo1wZSHg2gMkKcLW12B5w78_1BZDHPBC4RewpSkMgawO5sM1nu5YFgV6C6x2e3MIuEdMGaX1kHeqOKQOlp8Y0p5vs1PqTpO7anIT85-XfiACrkOnYGjscC6ULlytS05zuJ8EnSphFKZDo0nqu4jFy738VAXUVFHymtyI8SU3QHZ9q3dw47mkhr-Ny6BdrAJ89f8asT4NqTXl_5KOm183OxBu05u14CtEwCl_7HhARuyjec4Whi3l6Bmabj2-jHHVdCNMzYJNvXl75UMTBiiYOo7ZYXvrd973xnotEzP6-54mFxxuhtYdoonHzCE7tMXwvvCDxJ2Mx1R-0XXpvTVSoOQDcoyLuBS9bI8=w1010-h667-no?authuser=0',
      audio: Audio5
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