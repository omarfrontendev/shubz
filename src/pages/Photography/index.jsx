import React, { useEffect } from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import VoicerSection from '../../components/VoicerSection'
import AboutImage from "../../components/images/shutterstock_204682738.jpg";
import MainPhotografySection from '../../components/MainPhotografySection'
import OurPhotographyWorks from '../../components/OurPhotographyWorks'
import PhotographyTeam from '../../components/PhotographyTeam'
import PhotographyBlogs from '../../components/PhotographyBlogs'
import Logo from '../../components/images/photogwhite.png'
import Footer from '../../components/Footer'
import Banner1 from '../../components/images/Photography/banner/pexels-zukiman-mohamad-22185.jpg'
import Banner2 from '../../components/images/Photography/banner/2.jpg'
import Pricing from '../../components/Pricing';

const Photography = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const data = [
    {
      id: 1,
      img: Banner1,
      subtitle: 'Photography',
      title: 'Professional Studio in',
      title2: 'Nigeria'
    },
    {
      id: 2,
      img: Banner2,
      subtitle: 'Photography',
      title: 'Best Studio WordPRess Theme',
      title2: 'Photography'
    }
  ];

  const aboutSection = {
    title: 'Welcome to Photography',
    subtitle: 'Lorem Ipsum decided to leave for the far World of Grammar. The Big   Oxmox advised.',
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, A large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    img: AboutImage
  };

  const section1 = {
    title: 'PHOTOSHOOT SERVICES', 
    subtitle: 'MODELING & PERSONAL SHOOTINGS', 
    // overlayImage: ServiceOverlay1, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const section2 = {
    title: 'PRODUCTION SERVICES', 
    subtitle: 'ADVERTISE. FILIMING. YOU NAME IT', 
    // overlayImage: ServiceOverlay2, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const section3 = {
    title: 'POST PRODUCTION', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    // overlayImage: ServiceOverlay3, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const productDesign = {
    title: 'Product Design', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  }
  
  const weddings = {
    title: 'Weddings', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  }
  
  const commercialShoots = {
    title: 'Commercial shoots', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  }
  
  const portraits = {
    title: 'Portraits', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: '', 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
  };

  const headerLinks = [
    {
      id: 5,
      text: 'Works',
      section: 'our-works' 
    },
    {
      id: 2,
      text: 'Pricing',
      section: 'price-section' 
    },
    {
      id: 6,
      text: 'Photographers',
      section: 'photographers' 
    },
    {
      id: 7,
      text: 'Graphics',
      section: 'blogs' 
    },
  ];

  const prices = [
    {
      id: 1,
      title: 'Basic',
      subtitle: 'Starter',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space']
    },
    {
      id: 2,
      title: 'Standard',
      subtitle: 'Better results',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space'],
      popular: true
      
    },
    {
      id: 3,
      title: 'Premium',
      subtitle: 'Go all in one',
      price: 199,
      benefits: ['50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space', '50GB Disk Space']
    },
  ]

  return (
    <>
      <Header 
        to='/photography-page' 
        page='ph' 
        logo={Logo} 
        links={headerLinks} 
        booking={{text: 'Booking', endpoint: '/booking-photography'}}
      />
      <HeroSection data={data} page={'photography'} to='/booking-photography' />
      <div className="container" style={{overflow: 'hidden'}}>
        <VoicerSection data={aboutSection} page='photography' />
      </div>
      <MainPhotografySection
        id='services'
        title={section1.title} 
        subtitle={section1.subtitle} 
        text={section1.text} 
      />
      <MainPhotografySection
        id='pro-services' 
        title={section2.title} 
        subtitle={section2.subtitle} 
        text={section2.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={section3.title} 
        subtitle={section3.subtitle} 
        text={section3.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={productDesign.title} 
        subtitle={productDesign.subtitle} 
        text={productDesign.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={weddings.title} 
        subtitle={weddings.subtitle} 
        text={weddings.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={portraits.title} 
        subtitle={portraits.subtitle} 
        text={portraits.text} 
      />
      <MainPhotografySection 
        id='post-services' 
        title={commercialShoots.title} 
        subtitle={commercialShoots.subtitle} 
        text={commercialShoots.text} 
      />
      <OurPhotographyWorks id='our-works' />
      <Pricing prices={prices} page='ph' id='price-section' to='/booking-photography' />
      <PhotographyTeam id='photographers' />
      <PhotographyBlogs id='blogs'/>
      <Footer type='Photography' links={headerLinks} />
    </>
  )
}

export default Photography