import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import OurClients from '../components/OurClients'
import OurProjects from '../components/OurProjects'
import QualitySoundSection from '../components/QualitySoundSection'
import VoicerSection from '../components/VoicerSection'
import Image1 from '../components/images/slide-1.jpg'
import Image2 from '../components/images/slide-2.jpg'
import VoicerImage from "../components/images/img-video.png";
import Logo from '../components/images/audwhite.png'
import PhotographyTeam from '../components/PhotographyTeam'
import PricingAudio from '../components/PricingAudio'
import { useState } from 'react'

const Audio = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const [currentSectionId, setCurrentSectionId] = useState(null)
  const [offsetTop, setOffsetTop] = useState(null);

  useEffect(() => {
    if(currentSectionId !== null) {
      window.scrollTo({
        top: offsetTop,
      })
    }
  }, [currentSectionId, offsetTop]);

  const data = [
    {
      id: 1,
      img: Image1,
      subtitle: 'Recording Music. Recording History.',
      title: 'WE CAN RECORD',
      title2: 'Anything'
    },
    {
      id: 2,
      img: Image2,
      subtitle: 'Bring music to life',
      title: 'NO STUDIO YET?',
      title2: 'No Problem.'
    }
  ];

  const aboutSection = {
    title: 'Welcome to Audio',
    subtitle: 'The Voicer is the brainchild of musicians who understandthat the best art comesfrom the best environment',
    text: "They know that to make great music, you need great surroundings — a combination of top-notch gear, comfortable work and lounge areas, a relaxing setting, and knowledgeable, capable staff who can work with artists of any level. A place without distractions, yet accessible, where development is encouraged and prices aren’t prohibitive, but quality isnever sacrificed and clients are treated with respect.",
    img: VoicerImage
  };

  const PodCastProjects = [
    {
      id:1,
      name: 'AFLEN 2',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9742.jpg?alt=media&token=6ac5d90f-d5fd-47ad-887a-d957606bbc8b',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%202.mpeg?alt=media&token=d0135abc-0a50-47d1-a8b3-e72e07eb1443'
    },
    {
      id:2,
      name: 'AFLEN 2',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9749gjk.jpg?alt=media&token=9e56d8dd-49e4-4a3d-9842-42370decec69',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%202.mpeg?alt=media&token=d0135abc-0a50-47d1-a8b3-e72e07eb1443'
    },
    {
      id:3,
      name: 'AFLEN 2',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9868.jpg?alt=media&token=8425c0c3-6578-4253-b1cb-6fee228a991a',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%202.mpeg?alt=media&token=d0135abc-0a50-47d1-a8b3-e72e07eb1443'
    },
    {
      id:4,
      name: 'AFLEN 2',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FAFLEN%202.mpeg?alt=media&token=d0135abc-0a50-47d1-a8b3-e72e07eb1443'
    }
  ];

  const RadioJinglesProjects = [
    {
      id:1,
      name: 'AFLEN 1',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9742.jpg?alt=media&token=6ac5d90f-d5fd-47ad-887a-d957606bbc8b',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/RadioJingles%2FAFLEN%201.mpeg?alt=media&token=5705fb7d-02ab-4095-b6c9-cd3458f0ac87'
    },
    {
      id:2,
      name: 'Basuma oil ',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9749gjk.jpg?alt=media&token=9e56d8dd-49e4-4a3d-9842-42370decec69',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/RadioJingles%2FBasuma%20oil%20.mp3?alt=media&token=fde1ad45-e9a5-4754-afd5-b42daef03d6a'
    },
    {
      id:3,
      name: 'CRYSTALEM',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9868.jpg?alt=media&token=8425c0c3-6578-4253-b1cb-6fee228a991a',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/RadioJingles%2FCRYSTALEM.mpeg?alt=media&token=520234d0-5ca8-48ed-a2cf-f05724b6a799'
    },
    {
      id:4,
      name: 'Champion Breweries Jingle',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/RadioJingles%2FChampion%20Breweries%20Jingle.mp3?alt=media&token=7997fed5-d8ce-4bf2-bc16-eb2d560918e3'
    },
    {
      id:5,
      name: 'Dryva voice over',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9983.jpg?alt=media&token=58715c38-5e13-4434-aba4-c48270abb863'
    },
    {
      id:6,
      name: 'Dryva voice over',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/RadioJingles%2FDryva%20voice%20over.mp4?alt=media&token=99d1ea90-7ea5-49e3-9081-e01eca112408'
    },
    {
      id:7,
      name: 'IFLOURISH',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9983.jpg?alt=media&token=58715c38-5e13-4434-aba4-c48270abb863'
    },
    {
      id:8,
      name: 'Jubilee syringe',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/RadioJingles%2FJubilee%20syringe%20.mp3?alt=media&token=10fa2415-5df7-4d71-838d-bc5917f84138'
    },
    {
      id:9,
      name: 'JKETIANO ENTERPRISE',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9983.jpg?alt=media&token=58715c38-5e13-4434-aba4-c48270abb863'
    },
    {
      id:10,
      name: 'Rain Oil',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9742.jpg?alt=media&token=6ac5d90f-d5fd-47ad-887a-d957606bbc8b'
    },
  ];

  const tracksProjects = [
    {
      id:1,
      name: 'CONFESSION',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9742.jpg?alt=media&token=6ac5d90f-d5fd-47ad-887a-d957606bbc8b',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/tracks%2FCONFESSION%20FT.%20TBEN%20VOX.mp3?alt=media&token=750c1698-08c9-4cae-86f9-38b186dceeeb'
    },
    {
      id:2,
      name: 'SUB BASS',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9749gjk.jpg?alt=media&token=9e56d8dd-49e4-4a3d-9842-42370decec69',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/tracks%2FSUB%20BASS_01.wav?alt=media&token=6ec81470-8b2a-4940-a2fb-02a4885a0532'
    },
    {
      id:3,
      name: 'UNDERGROUND',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9868.jpg?alt=media&token=8425c0c3-6578-4253-b1cb-6fee228a991a',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/tracks%2FUNDERGROUND%20_01.L.wav?alt=media&token=50dc7145-9d55-4a48-a126-28ac37383634'
    },
    {
      id:4,
      name: 'UNDERGROUND',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/tracks%2FUNDERGROUND%20_01.R.wav?alt=media&token=f176e5b2-19d6-4b54-9688-aaed82abc637'
    },
    {
      id:5,
      name: 'dream on',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/tracks%2Fdream%20on.mp3?alt=media&token=ec1d7533-42e0-4d84-b6d2-5a86317ccfb3'
    },
    {
      id:6,
      name: 'rap',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/tracks%2Frap_12.wav?alt=media&token=ae6950d3-d406-4330-ae83-39e53bc07324'
    },
    {
      id:7,
      name: 'rap',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/tracks%2Frap_13.wav?alt=media&token=a9aabd49-2700-4f73-b357-b4f9de157bca'
    },
    {
      id:9,
      name: 'sAY yES',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9889eeeaaaa.jpg?alt=media&token=e6fce5e4-0d48-4f56-9b2b-344b393829b0',
      audio: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/shubz-audios%2FIMG_9983.jpg?alt=media&token=58715c38-5e13-4434-aba4-c48270abb863'
    }
  ];

  const headerLinks = [
    {
      id: 1,
      text: 'PodCast',
      section: 'PodCast' 
    },
    {
      id: 2,
      text: 'Radio',
      section: 'Radio__Jingles' 
    },
    {
      id: 3,
      text: 'Tracks',
      section: 'tracks' 
    },
    {
      id: 4,
      text: 'Pricing',
      section: 'price-section' 
    },
    {
      id: 5,
      text: 'Clients',
      section: 'our-clients' 
    },
    {
      id: 6,
      text: 'Engineers',
      section: 'our-engineers' 
    }
  ];

  return (
    <>
      <Header 
        to='/audio-page' 
        logo={Logo} 
        links={headerLinks} 
        booking={{text: 'Booking', endpoint: '/booking-audio'}}
        setCurrentSectionId={setCurrentSectionId}
      />
      <HeroSection data={data} to='/booking-audio' page='audio' />
      <div className='container'>
        <VoicerSection id='about-us' data={aboutSection} />
        <QualitySoundSection/>
      </div>
      <OurProjects 
        id={1} 
        setOffsetTop={setOffsetTop}
        currentSectionId={currentSectionId} 
        title='PodCast' 
        projects={PodCastProjects}
      />
      <OurProjects 
        id={2} 
        setOffsetTop={setOffsetTop}
        currentSectionId={currentSectionId} 
        title='Radio Jingles' 
        projects={RadioJinglesProjects}
      />
      <OurProjects 
        id={3} 
        setOffsetTop={setOffsetTop}
        currentSectionId={currentSectionId} 
        title='Tracks' 
        projects={tracksProjects}
      />
      <PricingAudio
        id={4} 
        setOffsetTop={setOffsetTop}
        currentSectionId={currentSectionId} 
      />
      <OurClients 
        id={5} 
        setOffsetTop={setOffsetTop}
        currentSectionId={currentSectionId}  
      />
      <PhotographyTeam
        id={6} 
        setOffsetTop={setOffsetTop}
        currentSectionId={currentSectionId}  
        type='audio' 
      />
      <Footer type='Audio' links={headerLinks} />
    </>
  )
}

export default Audio