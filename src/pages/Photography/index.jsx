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
import { useState } from 'react';

const Photography = () => {

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
  ];

  const graphics = [
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

  const collections = [
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '0',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0899.jpg?alt=media&token=5a9718bf-6db0-4e4d-ba01-689043017130',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypBvmlZPSAQARx15rQ9VALi2HeKCnYFglcxQHsV52p-0CqIS0J9vZDcQIi9EjGEF009YgsuWZoB8myZDRuS-QkQTT7fS7WCsA8D0C_4ia3qSiIwEbPmnv2PqXKGvAGedl-1VleUKpiM6YMFtxJXXhHivGBA_3IPIH3UtrFE4uBsn1AVbpTT0laGiw6mlTsMSRGuoyEAtrBfjxl-T12pW-R9UIycZsDYaqavCXbjuQpg7Z5k5_Xbzj6uIDUJpnmAZ76ie5Za1ouwescCZmjyWGRdIHUiqEdh_KDATT_zoqX4YGO2sn46sTdOjQEpuaO4u5lwsDxMCMfUcUUTkIYZKcE_VaUZXjqvUcnHw4C3j2JZqIYzuQG6_1eqyxDplxQmvRM2Xbxlxvo3C53NBMmaduB7LF_uYhyFcbtR2kJbH2fURKK4pZoLzN1alW5FoqV_R8wjtY977j8C8QJGUKGPqsc987rUoEQpn8zyxGrsvFFR8yBOuaAfOclYN1JICtCSa704T0csKiGBSOoRuPytCNBIJwozViRRleW3NedEVLeGjsjIEpHUL1qLfahVODxYvaJK5yrgehKRThtDij0d_eJlmkulHa0rJMYtQlojAmL2Ryg073hZPHDtv7_FpSUuIWrnt_sCv6_qFkXyCEdtsEOELsNkVPjMaW25kib6TpRqONboLDzpidQc9quglymMRgF2qPpH5unSqXZiTpbHN9N3sMlNGpLhG5gZI_TG9L4RlifbwzXiwBRR9vELLd6mCYJu9hyfeS5x4c5zPwMthRzOUGQplqtWLgY2eAFkMUq-6MDf2TqPJ-4VKBggKGg7A6kWQRjm3AdRZ566BYoIaT4GQKf4KO6ZBNbWFPh9ElJj1JAgr0DKAfFmrjnMqnqzR0DxRMHetc8yrS1nRUnn0sh6I_Yc_djNjGR4I3v5SRUaeaDELjzUgA4FNtBV-oN4KSy2vbkKUUxXLOQYrhRsagS77_ZQHHlJg84V2jEZJrQDxNQfu9gSxfieOKFbojCHt5A9ZUHnOfI8fjhO1ihDMfT0sWl74gdvEmDMZ0LS3qYNsKnWcJIQWD8pmle1_DQ-oILtPa0iFe8JNXDYFfquYoWWur7dKm9Ah0BrU0oBrN0NyGF5Dm9NsoQWsS9ADL3pHQbOuyhbCrIEn3UCWrOpXXwSHUzqsoSaanZhgjvLhR34xzkbAqCWptu2S9wLYWk4N8Z4Pr8e9EjY9GpY82pVMTXm0LL4SKCudAkh2Tdz2lZ5qq0EA5hJQXboD9xslIxPrsQtyv9Rr5cvB0u2z9CRwZpH0zLD5dlXMQOafs693Uv5ajOHYZLDomElghipIYm7PzXGh79bjUig9ZT_ggPPiXRNcnZnBfPA4khi6kDcDAY7fItDgfpyg50OjmXYgAhEObYqJ82q_xDi8xns601xMv4in_-9R4A3JCHMi9bVSQItgarnaCJGCdozADPGfkjWt9WZAIjOSECFtIYMnq9rTEA=w1365-h666'

    },
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAtTcLAOUDtsb4uBb5aQ_vLrhJuK8efZZB5ACVxMrhftMff__tKzGyZ48kafVKNqweZC35Ttn6E8Y3qWQjrJUt-8CbdKvZZvLq2MVs0VKpGRFu0m5JwmuFjChQzNd0UrjYITBCOE-s97NgWcQRK6T4rP1qBDH7_2TTlFnQ-d9_SJf4wMCHQLUXnRTC83TE0TaCrtbK-02hOj4h_JQ16mpPiEVUzB195Z1f8MchI4plDRPDCTPHuCMiirf5BP2HTkfmjriyyhuvh431jgMy1vK_MEHzYnmZP3f0fqaKC_8Y60r_jkTcyaV9aGFVDym-nDBRCkUYi-TDDdr2t-3KzVirKdoRh-pxLXRFeZ1OhesqIQ0hbBvqp2TCn-em2LztccgfW5-wHV0o6LEeKTowFc4lNe4fEmRzc_VtwCvoE1PIOPSxIaT5N0u2lf-7Mrrugsh80j0BkYRXqq5YmglFsDLmUisl66ouJYD_Y6qarCwp07fS56-eNCm_nNLH4gWA72vdLtCUDwdePA8cSkIJw_ADzzzPeQZ5QWlTiC4yncsqnp5fA7Y8eiPIz9nTdGNoJgLhD5y-Yl8E7N_hKgxOI53yffK0vZIUwgrEzEad7H0vlVy_tkLULqsFcgnGeD3z4fc18NLNOpAr5qV2csiEus9H0IazmIwgdXCJ7AjgYtEbtYO9bieZeKphGXtaWRkkPxiuVR9733ZgMO5ZtW0WtPmSbgv9q1evcCjkmzuSsFIg_8UUAiRKF-_mST97qcVXHf31dO8fyltAq8UCTLPUhHNPIDUPaxf_e34_PelBgM5xNSCWaPkbhcU9o7WwuhJuZACCxr979wK_1wZEKkslU9H1bX4FnJ-yygWlx-HEbzUZewS7-_T5GBautsrtZhdFyMIka3Uz9_UrQYyoVA3WTdcrhG2J2ZNqyOlPNvzg1k00-xUof0G3Re6itcI8TyZivJ51rm-jZ7vo1T9JzwPa3cROodSNqz0QsbQsWZjRn0HClq0moYuAXbiXG2FLdHxr09dLVHAgiNmNctd0pRulGzIn9s8I13SnhULOwpD3_3UP4wcJ8b_0HWeAZPv6DKi4Xga1ph43lcQmMHKKDZjT98EYJUiohCljUXsdXYXkCoXBnwZUhDxaR-4kvP15pmSHmcZ_GQPHhblCYIJFTlg57epjUwTIKlULE1ZjBucWeo5KRyPfxE2vCx4dToq_jimG5okDOD-QRmOfqBCTtZpT_gC4LBrpNNjc_2H5mWf1vLstAgaAB7OT0IaC3_0LAkt4Y-gnD1rEAYrU16wtzO68HGRhuNeaEyTg0yx-RpaOINj1A7j7wUDRRSiYWiH2kIZERduvWwEzAsfKzHmiN7-GybesawDJA3y8szev1p6rtLQi7PCDodtS1DbSeK8JM83918_UYlDEYMotJoDOzXz2LZKhoqtIEWc8viHFZuUPH6ouHfCb2vyHRYPj2OaRbrpz0FcUahmCfK768xg5ND8RM_Q=w1114-h666',
      delay: '200'
    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0467.jpg?alt=media&token=bb240548-97e4-48bf-8989-745467dee0b2',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDOeCqhgcH-_pAy8F_fUR0EBeL7GH1uvWbnhvO-HNaA5iDeKT284vCtfLYmSIzd40bgieQYaTey3uG35O0aqg8dcnvkO43raB1--SOHWxKOm3PMjglpKDQWSnp3mmrtkxNINpwQhNvIgbE1x8i-sazP3u0RIqrerG9LIRlsyK1evSUzN48dHPNG3eb2BYiuzBmq-BiFyzPlBVzc3wzgm5BwfizpuqdE61jOBNyUgd5b3BKpDGKsMW2OnZOS35BEWJXb1OGWpwWVY_aneMcuUFN1T5WnM6frvxAoZ0PQmTSJmPjeW9QpuS23s1LFfRXdXYBdkomHhULaMB8ikQN-fKcGL3HWPkLK51frXEeaJrFxnBAqIeAJsOc8gwHvSKhhDVyfulnbCahdu4kDoqGioNIZXPPeqB-SdLLjHpbhEMZIQaNU0oJuIyU_qa_opi3DDmwc1ivxXmUlbgWADF_XC6SEttUS-7B8KWvfcSCxXnDmo1_TnRFiOJVTPb6rewHpLP1ffwMSuufKay1LtMjE4BKN3fLNrcc73RSXWSBlTOAIEqr76MYY0JdZ8TrfHuzMIW3fxv-c9A9wzoPr7b5KrEUQc4L6XV4rt0_qDWxNWQ7iTl_-QXXN4aOe6DPZxhkCe_dNDM0EKy4xu3rB6W4YOwvFOVdD02ajIVdGpL2pANW4s5wPxRPeVw52TGTRgM6mmWiG8u6_s5QdqgXAFOAl6EubxSzpB34BdrE4eeHyxhon7Q_UqaUIFDzuGbIem1rDW6jvhQpCQbggrhgR-fVv-MF9yiHRuBlrCozY3-TwRDEhRxycLcq80FEfarosPISd0fjV6e3IUbffKSrNlHPOl1r2VC316Izze0y02Bf5UyTfy60hz5gUDYaqTuUyv2FAlop1aWiYVd0crre19M1ca4IvTvEJDqdTlCBzo-LzskdZ_kWicO7lISDWmwXwfESEsd3s2ifdhZ60MJWCtWF1SnG1unl-bOmIWgMFp5NY7HbKPPuvX0GhgYk2kYDC8Fh0KRGiZtDgUkkpSPu-lxy63-LneZAU5DZlP_6OXDdfw68oc3XLTRiPCzrtX8-cX7IZNJBWdAuCku9tqv7uEm8OfV6RaAM3B6B45S4hyfhGtBQId5bj8ZcXQroYza9VS4utoFLeWDuMDikt0Le-igJ1hZr8ximJ8uR8_0F16fvDaq6Yjz9w2QXMgtY--n_MN8Kqj1_sBIb-LR5SQA5dK-tuMthSVGGH-j4NK_z2sjOHPvj8n_i0MJM8lMEsm5XIrMSvBxmuOKHuDbrNBlGg0UwX9fU93oZgffsBjgfOmZO50ex57NAegtl-KLbTLWsetKeaumOgY2PfA2S4OToaVQacoHsVdkUIEr7McU_Mf8qhApGMzBzD7cqcNglw1SZTH5Q4dpVsjp6OoyGC_JXkkYRkXdxGmSwJFnSKmGROXTdBDC8Uwk8K4udx3KchClrVlnRTUPbenEZ1mayZquKFW2irtA=w1365-h666'
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0470.jpg?alt=media&token=06e76cf9-49af-48f1-a0ca-458c730d926d',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAW55ijsW_3_i-hZzJAlq6rD7vzg520YzgP1-Rh9bogUKEBRCpCH6-D8y2ZZ4bJb2ZOpGfmnCm3KNy0IMBAhUftCFzVIu6Fpbvdf-tHFrBlK1R9CyRqrYussOJ3ANaX1FkNz6LOQjYvzNn1FwTo2icG7ZK2h1S2a-Ks3HYNatVsAlliIlIhM8lVzJUOKMRpnjDNwaDQjAQNfMF5lXK0bgJIQOrCdRNysj6kayKdRjBrUvKn-vlV0pR2yik-i-iXTxtzFiZuOYGKVTSI0LMx7wvdHLUZ-kVQ8D7pKu_Xtm6r045zavtdGJqS8hWbkJ-cS05e4tXdGuNUbvU6IQnxpICfrmDEhUMsO6Ir_B24MfetfS9MEi863x7Au3OMf6pADqafXwzr13x65-mTKDIr9Sniv80d4BnLMsF9Qkp8UXFJICbnG4LZWuqMHCzbH2QxWzv3wOj_CDKLmsVVlSroE1bOG5cD_4KEI0v26tUDSvR20Ed_s47mE51PD6NU9Isp7JEPmrA7GRDXBKViVHWlwmQkODxNjjXUDGD2u6I_1gpkGsLeHNB7jUM54S_cM5Z1RNRn8v-Tyzvxi-fQwpuEMKLQnz9kbi8K8NHJSS_QrQNMqDyjEwgIQ4nZyI_A1uKqNr2ahWZSppqg_Af6gdKsDVo2JX9I2YwsXgSjb1e_OAAouauSJuyYn4nrXX0ztyJvtVieteRzCod-ezMvKBfeZmjy4gGFbtX-A9jP1m25t6wFwmlVir6Dmua-S7eZFabY7epD-A8W4KamfgIvmB-AimqzMPmTr0O7qc5qoMsQi8aii-vKAix7vaDQCyX1QsACV9DO40Rhc2vx-zkYIqQ32PlRYymSHOaFcy8R4kx9QoK6co6LdZoB_zY3s0ZX5FRsnBqFe9u69fd25g8RhLcLzWpzdv1TaRg33ECh1xScLapGEgwCkkIfTbBTlHr3FTtIHl5JtfazyY1jGuQQzC8EYmNsrsjNHKbh9IZk4MB3Ii_tXwzoB-oYZKImFbh2CSSMjEX7Y97NVDjEKbyQ-eZ3nogvIt7IdOe-uGuj3waCPihukLv8TBygYlDNcyr2n_Dmx1YD_LqaeLu-4eWDyXJ6sbcHOnca6t6LsCBhIBp5KgEb9DDE8Wa-evLWST5g1yzRNJ4QM_YB_06lrAcgns_-uqZILvxhjBXF6o0AWoCLFab8lV7iDpO5joPVnPXLtPDQgBGg4Qaoygs9ELDBueX8vJzRAwkl3majP_a921b20E3XEeK6aY0eBCScp5-09KykO2YuLByNwgmBPLM2n0IhcQvQZJEYo5nzcRxW5bfhq7sO9pzH9mBhZhoudy8A037OO1s-82XqglKErKw2i4Lu8y-anR_sJcHiYYHm3OgyvN3UCzAiWQC58dQqaD5Fxlt32Tcmc01BKwIoTvj4yUfVGqfB0EgpN3lVa4N2YtQ20r7NPEoxwANBKlg9BQlaiaqgR8zHvEa9qnojBhG6RPHWNA=w1114-h666'
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0471.jpg?alt=media&token=75964d70-6f9e-4002-942f-b8372849c8e6',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCXbJwP4fpkALxirtv4yOqfI3_kbp9a1u7O1_D944i8y2hbNZD2QpOJuCtLgahpbdDw6ZGLUJAxwD_KPNLi22Q7Q4BLOTmtPeD4_idaMLFUs4XUYXKPllUzDuNRW9uybnlrnPNanQciTwY7XgZYty66a3L2BwIKZ7qY6AXj-2ekDYWQtGv1zxSb-c9dNs9fDHd7Px0ZjHkprHI7MRyFWaxaJJ8jNCBpnXer44c3R1TVR5mSxAVKz9gXuDBBWBQqHlFrsWKjdhz037KoMdPjZj25hSU-LEBLTdI2fPYleAVWxXHw5oTgMhcmwHh4v1h-U6AuqUkszctk0pZIstMYv0dKaDCCJDM2PScvdMbAgSFBwhvhTsKgmyKFwkgYV-10hcAfW-ae2uhbW6YbBaiiL9VvNx5Nk2lRwwX-BgfYy3oGTnagYnDKRIoLwRTZHZI0mhaVOUEthiscDAe8WjEKayUuA7HbC3Xhtrz0UiwilL8ZpZ_aiP9zTu1nITohEED5Q-b0HPjl0OU5MeDATGqHZOjUuu5F4dUoxTUuHag9CllJXCzswOU0zI4tfaCV8TTqZNQW3f5jKSYpaHYIIFe0iaNdhlY-Sq_HkU92Tuotc1RlTpbAWpZWpOPNYayyFvWFu_w5_e_u_0SQiop_6m--RLi7QJl3r8lEnyXKHmahWbkl-47oS3KJ13fvCXXN_9jRIXqtzzuimkjW8tgWS0EttrE7aL23QrL-Qww6On6AO8GuIfAdk-bd8U-1qTXW5F2cDXKEy0FF3FMhjJ_pVimGJgy79aGKmTraxBK6FcwsXSFiAE8weQ3rRencjfZcReDRaAH2ZtVKZ_0y2YkL6e05IjEL_QpbUqBcxI1acK9hAS6LmCAzstt2JrloeUGh_hSGq6kUTdgIiLVOj9AxhW1Ze58_EX3bBFjanxHm0N9ZlOiF9UehE2N7QAJcERxar-V7jio4k_vp_bbshbdLzPqD5fnjdT6y1vQDBXCJfiPEXlz29i1tj5W1wvHYtcnMSBkNbNa2WspMbo7z3B5cxj_hkieAlMABR9c1BqCunWkvgElL_hpgUNl3UIvheNouEq8aGnZwPEkvlsyL3nf_RlN2AMuINWmOGozPldKecxor5nTMSJSPENWCKy3Cf8RnRXjzqbiVAhgqQZYUDr5I7gwTqSaOiLYTq7x1A-ryh0UlAoL87kpg2cwLpsKz5hDQ5naTOlv2WePDhiKQ7wtfIH8-0oipPjW5qAR-5PjrDv_pLt3iPvKcYEyVbp37qLSc5cKigi5Yw93NWbDMOTqx6Hg5HxRtF4AGwckXgwEwTFt2GBiMQLLQEg_icPU4H38XkxlXAep88Q0FyM_WV1vX3g1i4z08S6wHJmMjyMr6EqOrKqO-I5EA-SAtQV_dzQt1svJ1uUPCfBSReaybYFet0E-R5W4vzPJQ7F5d6BgbUWKP6uJog8u4cP7j-iR0JCbTW2ejRZoJqSY-oq-4sH13CPLLhA=w1114-h666'
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0472.jpg?alt=media&token=71df04de-72f1-40d6-9d6b-cc3c1acade3b',
      img: "https://lh3.googleusercontent.com/fife/AAbDypCEo7yxO7Tcc0iMXqPjOFsuxIBBsSC7WPqN5U-jjYIGsEgBWjbjvH7c1GewzYm9XJPfDH3oAbM9qdm4nWDkjbcJ8mb6zxL2jRJNZnAgs0iXC54zxReCS-hMUm7k95V1FC6CnLAZVwjzSIkSskIrjtiEJHuu6kJmpPc0oQLXobFCBeVLxFECe0lq1_3lnc9oqMJCIAbmLQNtNlk7D6w_a50RzD8N4jP_uc9F7wyOKlqzJEp3FtW3SFoTaczptVq72SXblraCBpGVbpms1a0cggJaWyNqRhZueXXY1D3gpcA39sxY_atjHgXeWl9lxziXLJd9oj8QGKOhi5_QcOzbu3a2_LetNdnHyeJlIXt5YQZ8QCh42-3U76bLsoJ_mWibf89VK3pF8bMJmWPCfHCFHf3Bve29jeudh9QBnAf-Dhm2bvt6PDnJpjiv95t_4StVGzE_73TXySebxdsYWUFSDG4F_Mpolo97iVEd6cbFPOtkpeIVJGxohp3ZAywfu-4AiBMA3tN3DlypzudgHdCNBDOYJdIkF5E9Kz-T4kN8OPRdoVXvxY5dNdR_MgZ7ouMzdzLCD-v3qy7xDWGmcgXhyMlUmDfvR1o4UaYf0pW37lr7bnNuKVcrn_N2tWs3PHgQLTvIhHv6dScBE8fH218MNDnhq-MpMhYhI8E2FGpRWn-RT_n3dymws49viPJ587NOd5b67gWFoe-BHk9FZ_ov0_ddPM7RSDSxATRbuqeGHXuRgX27V92cyrSyC7YkZucdTBSye1FDkpr8rd9lpD3AmyCxrgXXb29C-6035r2-axTrAKXUkvpDl541TgFM6pBASV9lQph1dtGxp-vof-ZDMl72ZkPQdGeoRfKudo5kWBLp3qshbGzCyOl0xlf8AkkQbohdUIYd-7CQrAZ8oZhaejDOEJSNCLKpclFfmfsQjwZtPBzt43c3vJVx6G2H1OdeUzw5KlInt6jGyaHda-JLLtA1dOeVL6iRxSiRxhlxz81pfas-9x_FCimAw2HrNr3wVeWqjtp26XYiEomS6VKH-vq_i2sx_wONb_EYi_iiQtt6fFz4JPgQ7eBtrDCFejKo5ksYXZ_CS2-4-CMSVJV2bFwISvhy8YaPsZRxD9Y8JhqdQabo_jL8rjHx8hHtrr2oHtbn-erxXBlHcUjt_bh7fHoN-LWX1-pPH-fZQsGHCLALRLdemCJJAZoJT7Z7AAmCjhYtoH6iNwc-FuHzAnIuSFoKkOuwk2jNamHZWcOEyvvxbF63FDjFWzhBz3XBLJSPCkkhlADFm34mwK5L-pFsf5ywg5QcBQZdE8h4_xs40IcAvkXrZEPhysqsRV19-2tFGkdaiOw7iTe0lqY1RnFCF0YPE5nT1nFtNgvGyHLlNWBw5ta29Q8G8zWzduYwlO36FQHpW1tE2WimlcDzw4O7LGEXfTxoHc-CYjS5DgqlyjAaSn0dT4ycqczZ1DGxn6-Wpw_BPiI00mYbWDX-zMctWg=w1365-h666"
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0473.jpg?alt=media&token=beb86a6f-f30a-46c9-a041-6132b934f41a',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDH72ijSHO-u7WDoPQ50iFpqAVolUCnU4Rj7ba49SFj5r2dv9DvcCrJgxmSTzry1MIHi3afpqBQkJ3_xLhBVO7YdSDjg-bn4vOraGD6kY7pD24Pls78Buib6QEQ8_mQyaTu0wUQ0FX4mPSAUm8peihqiyVXQv75RFO93TcScx37WAHZ75SKGt8ljeZuXWNmUwFLMVShKvJI7_a-DdFxxEaawO1FwDloHt7eSwbFH-zwPFJShTaVuDHveBhuQMvNbVICoQbfVbFGKOpBrqQ693jrCF6xuCjiOq5Zvhg6UmUBXjRunvmaocAj_8fkzNB51tkS777LwwtAwh_mI1dMDBSKGawFYvz4m2zsUuCHuUhNW5JJQkDlypji95djmiHtza7CNORM2A8SOnMfMUq2878Az84dpxYBgry8abVNF1HxCUj0GuIUifnFF2qbrppHcYgRImR6nOLPq4wYn2j5mO7VGZhWEQ2fZjjWtfjxPAjWtxpRc4jzNKI8fsWN4cfCMq7xUIoA3-lzxWud3JB-A0Iq-ciEQbh71qkMf0Ci0zCTx9jyzN5sU3n-wHYf9v-FZ_etT828ekhWhjFRZ1WE9ema-ui07YWjSBTkelsWecxr5-pHMQyhfwYYn6SkdQNRUhbT0viJQ3rOvdC9704sFV_zfCDHnMOeNGRLZXgyxvo34n3Ju17a7VysFPepbktM-vrzjdBLxdwfSPGrmRZMCx_twUpiAguHOumP3YXHu4JDxmwyjs5-exJ6Rjiov2IfhmFIb67k9fsmVp8U-Q2yIJKKTSfwitE_jO6CA1mUUAy22XH0tpjsA9VtVVRnKmhnkn_bcbLZv5_mZIjm6uFb3VZy8eWrLNPvEyTRMZruZjV3ipCeuy3hWdWE-wpKtVvKBs8KELx-_4GV5knOB66ssiGHfNstx7SrhTQX7cLYdksHcrSkTgiqSZWZdzx8udYcZlLeP1Ugvnec_VpG0hARL2glXv29nizNKb4qs4B8UWm9PFVB4pqdC0kw36vquLT5roQtiHVtE9nqZrypbvoy2lLdfS6foLDEyg9HQ0wiuXDbyYQ9vCLdAiIf0N7BoN6qLSQEo1egPnuvyFFGgVW75uczhW-j5N-RbBDQNFHFNSujbZw6S_kAYv4FnfpeVjE3K5CmHoAsCXNpyuLgnfjDOJl4D-K7mfdlsr6DVQu7K2FR74yzqrgo0HTaFjJjMb9_e-R-7P4OmQkBkZ6BNTkXYd6DM9kCQS2uj92fLKpUl-R8guqjiHy4Fb0fApDP1FKDy8N5QOtcJ4KfkX_mDKwNG7Ip5o6cTy1pHqTmXl-Jk807d-L5NtS71NLMnXLBcIzI2J9IvVc_iAIbYQxp7p2v7CQjgNk-rJ8ILT6vq99hZew3T2T3HwfTlP8ps0UyDEdAyk5P9qTrv_AX0-K0SiPuvfkASFF0V6_Hv_GdPF0pE-4kxohn5QEi5ZhLia6ePLZq14v38UIBUP9N0laRKx_1qQ=w1114-h666'
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0850.jpg?alt=media&token=cf15ebe6-e998-4491-b2f9-78afa9187277',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypB6a08v3245XnE74xjBcwakps-bDA-e-cPp4V3JMAAkt9PY_FeAGgDePa1Xsuyw_9L4R3l3ma8W6v1VkIJE7IpWxXlCLz2fB9PhYu8mFCXmzz-4aVQBvZZoh0EylTTJfS3iG2QpgFiMFWg1uHB6XPli1WhEpYHrCfS1elo2__iihRqcdwpXRcl2_13p5X089xbJG8NEX-3rhixnLsZOUWv9FTpXvMjBTjqErzGGE9qhK4S5MIHkoFSqG8kRJ7a9tRJbTIny2gdMf3BMSiAYCuaUVOvVDcoY-PDTtOwlo0Q2eo0334PUlpPWiqHwZkbQx_i6N8lgno3osrjy2qQJiSWl5xnUaNbtXZZGyzp_eT9hTw92k3_02A6IZwTAyYJsmJ5RbnqNhkglNXFHZkhZFdyAOTK8F6BEtt43gy_IKdAszCqnDB351vt7G9wZNJiXGzlwQo8D-b_WWFm00_cyv6YaUDzdmm37lOCL_lJWYtoZNLVcbYijYr3JX96kpSMFKpASKSY-Hv8Gv24sWUveGr4gHS33YSHInqETkTUD_UuJgrARCG5aUl9_kmnmmxCrudvwN5qHVvun61BlJiAHkya_UNfa2Xip6lw-u07gnNvdd4bp57m1lSgXCv1L_Uu4o1JnNYjbNjOdoPDBogClTOxHwmsFof7eImQozisU6Fj3VgI-QE9OiibtBEYcnXjZWlNEKjdk-hupDBnHHDrq7-aTY69lnAe0WGVtbOWVSALY9DCqByjw3C2CwGJV7IL5y0kLVfT_eFYZ-bzuiC2_0w85RZ_AfIGnoNiqQKDMAXn850PZTuVnRX9zab5IX7sNRFksllfDxjbnrUYObUdYRuZRvccKkAm8Yf9RDQLf5E9txS7KVsgyb8OWofXLcnoOuXTrR_4AG08woY4Hx5W7fe6vOoX_kz577TDIXT7uHnIag_nwncSFr5hrsXnVuregW_ziYd_4q2_1pb4cAvAgeQFoCByPkglhSOHiiA1p6Isn1V27iYLWbFKYYpIfmBn4Ac34ohM_GmLqhJnvZG_MNQ1-QGTXkjGKr6yORDdDEyllypDjkrOw9jCMorF1goZ1romHDc5AlFmUYOP2UJms6wk3X3Cr86eog_MtHwsXy1gbH9dqccE5xnUMROqJcokv_78kmXYuHXtJ1RIQh1AVhT8MACmONOVn81xu2UEUi_SE3f30XroQk3Zfmx3IpLnAO1Co9NhZN_88aSsZSEZyDNKWr87pwFbctjpH2moDRNGTEYLsEoevXmDyc2mBEytVgjdFoA15fEMOYRCoPyx6m9m6iAbJYEZaPHrkHFxEs7X0QwGLih2V0Irm-XGKPtNp83o0rr0gNXg3_pNf15ylyZiR_ZJMSsWSEarZXrs_V03uOOW2sGnmjqX1fC5S7EEZRS_mZnBLpqLFmBZcgQleAuN97HFaIIOo5qpl7Ffv_LHEF2-SW8meP5mMAwuTge3HgFxo6JvZRjKLq39mTJPBJA=w1114-h666'
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0878.jpg?alt=media&token=1f378515-19b5-4fdb-8ace-bfa2178be1cf',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCJDSbqIRZq-8xqyXIA7hQALnio7UL5YUbFSqkhCRci_TpxqNkdlo_dOaHuQX5jP0eVwFhEXN-rh2xFHoVkZvmIhpdRIOmc6wlxeXdMqMRWWYvK8k4HJOc6LjX1pNJlR3R-c8xtbXfVGNQOF3MUTvJPjg7bMvEWtaGAzV4xMmLBNHolSIpR2k1yeP1OGKcREQ6_87dDzN2Dg2JOo-2rTX6WwU3OtBHgcjKzH0mJX_9amKF_HjiDMG3p6hY7BxHZ3RmihCStBBwvTB1JZwjjJ0X6aUxfMn2Bgh52eFnO0t3UzkW2EA7OJWaRc7gXG_zLga2aDK_xNWSx1ZoAJOPQSvyqbyCL490IGcoYJkjZTkXMd8WDguI6DoMC7KcPa3WQaa41Sko7RvybKgOcQdKjujc471wYc8JSdHyzUaSTQXZOlgPgT3N8_41hOuJwAipiy72dtpK8RH84nTyXkNv8DjzmO16tXxyKUj6fcWxYOtCPt-oS7W_MHbFRSsMwBzAqV-9N7FkErZup4ZGqK67igc7iSAt3c6dSpx6mGaAVT2_cXh4as7mGoiGF7g9XtO_h0CAiZBZbA5UV7tSgEmbqFtPx0KMZ9D9N6ma--ksOKDymEIjU5pXCvGsp1bLq7qYP-0t85xc-m_iDdTQ94f4mi3iP-dyLl5wuIwJRcbyJk-FF5HUCxZNbreARO8JjTsNzD7i18MxPFwh-LThIvLT_VCO8ft1hbNWNdJZWG6LyVGx_YD9gJZZNpk0INJMm-qFdmN3O4GrT5EATCgOoQkO0Ccu0kTr-w842nkHiC0XhFtqIvyTnAALynMGFTf8AGO-FzZdafojrKE16m6wdC6YyK8P51tqlIodCwYczU9PSpUP8R1MOVYl4ldTpLbdFx0cPu3TtPgWDXkT8PWmXem1DCqgBX6xzgHiwp_jKkMe4BcDg3xOnrJidQ-EuEjItYceTqfWRsQ9s-yiFBZBM1Hj6q40gwrGc-XClG1yyFNHQ9AiF9i_kbZzoMd-lQSgP9o7_tmbEFzbgkz9zT_8okd7XZTPy1XztJIGltK6nxPVlCzrp5oUIyJDrPTJ3cr761oko4wxlAuKRrUfSqUAspfzgM4QmsGi4PDls0Md7WrOHZS1MOdVghx88oWLIVX4GKd4fz3Jld4gQ5XhpfAx_t21cC4TzmG7Omt78CregSx464iMe0rYfh638_jCucs0BJ8EqPyTsUyGLzLcbrj6i86ZzBTWGvzmUcWUpVdv4mKEQhmrqLbW-rq6OvmyJKBj40XxC2f8v6rvAxtVPQcBbnOv3nkxrp9Daq64yaBBo6V0dVZ8esgJTsRHcEIRiuRhDnae-VtnolzyQZiNZ8X9DKAcwCqCK6ySb5BqXNnI7s_UbUG1LtQaGEs4yZKufNhBoL6vYgpqnKR9B25q5b4jNaqh83GtEM80A-aHflEMqSKMZQV2Zb82neBz7t1HRawSav4Knbq8sYQ7eBcUao0Vd1_GwHQ=w1114-h666'
    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0881.jpg?alt=media&token=d0d2bce2-76a3-4dcc-aaee-81dfa881cdc9',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypARXXder_ZI06bcWYnqima36sZf4jluolwCAKTQ9cvhTRbfEciLyLjzPfHCrYp2ZdqXAXsUGj9pnXKSWnIJk7xWNlx2_-EXejymhe0iTG3ArqYNGS4H5erc2-WJam5TryY0FjtkrjIMqRCKT3oHPtRrTCw49FN0nlKLxQM_gygxnuSIzvjpfvNIhIBV7dbny0HQwlORym-7w4CvkKS7Uf1t_n-dlCRZ2s-V-cfrfB1Osp66c5beYbfigZ3wRYuo2ydhnIk2QBZhL12_Xas5QiqaJi5z3WTOxheralEUPtc9NpWxrV_y8MzKUgjMs8bg0LzxiCtlmqUxmzZErmiri9dcjdyyRFsGoYb-wrCPA87svO6HMNxgG_WCmQwfTEiFjDxRlWl98p6WMMhfKrnM8WIJk2Okg3flk5ImEJassCCGdU4i3tJgcLlySlOzGFQ9w8vonv7fSr1HrK-P5SIqNy3rjkhmgHHRfhcGmzYfml6HHSdUeaje9tc7Xro5YR37wjONTdNIuYL0d4Rp1lvEEO9roHACyj3O1F0CPNNzTjNOEGEG6oC7u5rXBSfTzsDx0oqh9S6S3VAO2PH7fsBzBCxCJf49DiSApd8UPzEe0kcJy7iqonG7jpa8nMo_bCEf2RomRlNNB4833xDo7ilacuFSnKKYsgiCgWZXHEc3n3rzXfMRSuQ8CrP8jeiLMMKrflSieB8nR0hwMlnXWpRuDIIRBLyDn-fYo49qoWlx5drwRO2bU2oo9sRORVUA02a6tsMUaBc-5AJq7OURVf2u-QVE94X8naH0vsPNd8cRgIReSu7dqAfvhi-pdYX8mPO9ouAfq03-F_gYR5s_qz5baX0_PW64tfE2h1BZVhjkmNkKewsRryaSoev1GR9y_8XICeEiQsi6bzHsanzR1hHRhLqAh0DuTyTuFBtx8875av-JcLQKrwSaa_GRyGS1x99egz5M0zNuLmPVE0FBgtxHONrNDNgh2ep9tI8T7CrKL3Uh0CnyK1wlfDp6tGSchzUAmb8Wys8OzJ_8ddbwblX9P626nJFCq1pEC-g0E9VqqAg8MV1rY6jGfIAWUWY0hdzq6fg1pI2m2Z2CGHrq2lx8CuAJNQkmRxehMpUtChzlSbZpxE3ubv_n4GZ8hI_sVwQMbHkRUoeXeazOXIBT6tJk4ciRDBYsGAzMdJ_5l2AxF8Iq1nqMKqO_cyCoTgtUQTLbKH55xa-HYs8TE9X_xp6hpQZEPZdmpehTkJO4JqZygt4vn3oRconbaLwcYGoH1BSEWscX2cagCVpDVqfS0YWR_1jBm6gpnTgh-TZs5uVJvI7Pas1VatMI3N3lgVyd3wtfbNbEZtcZZGIS7LPiMpjD4WDPNNbWZs8WUOXYCGoAUbWC3nYkvQia0mXy6ZUW1qudBViEuxC-IqITbgylMMf043dCZGxi2f2L2RuQUMaVlkefsgnLwOr4Ds3YFZcf0IX_QFUOoOvz5hcDZNcP2gcj7A=w1114-h666'
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0885.jpg?alt=media&token=4a419620-ad6d-4659-bed7-2e6aec5d0d22',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypD8H9WV-OdaRIhZf2OklO2rPA7Puv5WqP52YPzd65s3Du3pvUffDxzpjrrGH_44JlQyudEaRkxQa4oFrgOokw1QTrA_3ogK65IL6h0e4b156dLZQdCOpEhRl9AbmBvs2g5CjH2PTqZumeJ103FHj6FtE2CjsrLmu2AhGbBbLRi0OM-qTo-TyvCDuG2bO0ruCLVQzneEaBykO3TspJ8I7dmMWpSw_TViFKmDxs7fA3NyI3h5-38znH3h__dhKF0FG3GG24PRZ487fbn9Ma6fpAVJsCD_OBoCXNf2_F9-Gi5xLF68_iCIR-4UIYRglC2ea3EvDB8ki4iHoq5MHsTUmOgzxtm8njq9VEJT622lOYaNumCc7rxJkePdzwxkCvpEmUifziWe5mblu_ZyoxdODVQWz3CMEMPQK9xj5TysHRUwWiQi1JZFk0nS2KxxjDgxuc6owJTOj961UvLEvbuljSJ3rL97uAVR0IS7oSgtervduMSRMTSK3vNQHmheZxDfAaoPvOXgBQtewpRzFKPZMy1EC7ddWBBglLW0AZNHzcOk940eQFfxATuOWqzwDErMxluprmWnpHgzmEzUkVA7FOzwwilpELMWnQcX-4uEkdiYZRKc9nM0wfU0zR5gEusK6QykEKLJfVREJw5_cuC5LrH6JIWesSER6fZTZB1WX7AlkwTgaEThiZLTplRF3slFC6kkemuuj9K1Q9ykeuqbNdatuHvXz02uZgq-1h6o2jVDZ0JcyiIiuAcowQa9JMbXAd3P2asQTvcWE0buf6RGFbCvoagK5AiJwBMQDHcKiyotdQjD-bBkSQkP3HhXBFrQXadmO7juWmSI_i4dDPc4a-zqgOaiLHoiulbBzil-xgub9ABZh5NGOYZyClETahcqTYD1sFWRn0AMoNn--6fTsILoTCgjqs3oAl-j0o0wodEd-WL1vvlDVWu9Y7irL9Z4rIP5fSlPDSMtiMtzN2vmBYUAnLBz8K5R3PQV1vrjSl4mlbUiOJNFkRzIp1guvW5nmsXkF2u7VhLNwf2l_KOruutFxPYnR9bu8CkaaDORpZBe9JrfWM2DDjHzVw9V0WN-jg7AuLPg5pOHlSCXb0cE3KH_Ua4J9iMx7EMyTxCqrJsdVAhnFAL8OH7ERaYvB-WYdI4WrYpBebpQt7UEvaGaqPUGgCpYzpM-QlgeNc1j_8WgdYPZgkCyQZ9Os-AOqS0k3wgNGE0JLPnXjKwMN1Jnj2CVbNlU7xmO9_3vTWAOpXOpeF-empCNicxCkXX-WoSfbYX36RVyU9Vyr80JvML4Ch8WU1k6XM8tUspFwH6mKH8ZF0wuGAyApYuhWQCgBBOEz2jBBldj-n_ugPPxgAAVIAI6OZil6TdhLNyjH7d64wUTe8nWVWD-63x5ooi_IZdRTOG137cZVuv-VIp0H11lVyZ3KB9ucU5BqZZoq8-po9xwB-q3t-4HE1RFrEy3Nec2kaRjmuFEo9irsGcpQI3ZgA=w1114-h666'
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0890.jpg?alt=media&token=ac4e3b0b-c190-4e7c-8299-2898824b3b74',
      img: "https://lh3.googleusercontent.com/fife/AAbDypA9XW4e34zPPk96CADQrr5QjMgT45LnOVv5LvVViSsCRNMZpKV3tPClknj75UX5FRNQaNXfvhAefBfqHNRVdgQQ2tvs9kxZ3aI5xue_stxsxknn29htK_7yViBwCpy0PIvHZgzZfHlDPGT7fnsw3VDIBjNCpq4MJ7QGWGNIrPeXpRIb6g5PuDdsB2PAb8D8WeTMMyga_xSG7kTKwzJ_WeSIlplcqoxAAwWVGGkF9NZU_aimPvgZQw-JV0wC8S5NER2eZuvdXhoSEkv9L0XG95zsoAiZzLkQZBwOVSOlOrP4Yq0fX5tmmD9XGPtNIYDTCT1f9Vyvw2jHsq3Z_6c4U-bvBlvx6zh6Kkp0NRLgDTlATlRXmKJeeAOO-1xgJ_A0rQV_8M5a8Lum49MuFOotq-oLQKzTPZPXY3WfXsrr0-NrIrarTTpW-CKFzALwRWYQZkex7kujfn5YZrVwSWXvdv-NSLf7jz5HzJP6GvttRfzWEdQa9OQ82Qprzas8vHw7K3t_2LFgfFUZy_QNr4bKLWtcnqfryS5P_Ct_PBCyKEwxdvG6HrNBdzlxvhd56atKk8przI3XycWmQmymHh-s4kOA6pUIK5n1A-2yX997F3FN26NHmi6yLFManIazOMQYTRIlnr--wOyCmWL345xv79FK_SHaY9gCwZufpFmDqwgT_HTlg1oBSu6cBzjgo4StFImNGwO2FMCN6Ustjpd-PmAcQhvOOKPPYUcn3MXutdi5M0bunXFjICFOVzu-OQWuAyInfi-hkjblSwed7UxEl7rd8kYrfpIVRwfEE7IQGZKl8hJcCzIHEYVrwvVbwYMtjQJkNcJegbkq84GPo2KzKIcIv0AGoctyA8zVEyDuGn72Wa2gRTyE4qpvKnHQOKub81El4ZUzjWyyHEz9RHPTN317yMLqysLnJCm04BnnKVgWP4MfgDgGLwoK_DMmUtls60rJUn7Jr3f9SPt5kJ8-MyWnCGVF5_tpSX6wXDnTTspecyM8IZd3x52JlOmaJ-5GTNm733Puu1FAcxN7Ka3ZrV1G-Rwr7qKHoW9lRr0IUns4aMBhOqk-e8aCYAPxisKzXna123r4y9pn1a1AsbxLXbhbjRumxL-lg5e-C3TKJIxAhAXDenF0bPk_hGWHqtT2AF9l0mlMT0a3bIJpUB4_H64CD6tbHcd1vfFzfs-jhjOrlNSZqkCbJwacVsCaRePn_IECnPBRr2z-TzUlq59zWuxLbuLpCiTw_qps3aNI4kRkUAqZLCtcVGC_cJQbYxv6Iq3jPdbTrJ7GhUEbC2adrGSNOY1TgLnRqO7HUxOZpv1TxotNAGFeRPzjc_7qts9HbtGhHk8ojdB6n7jzxfHfUpTkyEf1ofJVL5BOnhPuBSWEf_Lkz02xcqR-LVwlh5rlo73SFDQDJh8XjD2w8v9VwPtKS2Z1bOZJlkNzuGmEnEjohR0RZwpFc5k2Pj_IzDOoFmPlPzbR93_EGWHUjjlGyA=w1114-h666"
    },
  ];

  const MorePics = [
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FAda%20Bestie.jpg?alt=media&token=2bf35cba-be40-464b-ac59-73ed4b16790a',

    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FRetouch_.jpg?alt=media&token=3b75fc98-b634-42d8-8118-fab10463bf04',
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2Fbenita.jpg?alt=media&token=beeb5d02-5595-43f8-b7cd-1903efa2611c',
    },
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FAkay.jpg?alt=media&token=1e41cbc6-5010-4515-842f-7fe0d95ca5c5',
      delay: '0'
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FJohnero.jpg?alt=media&token=5a405f90-c35e-45b6-8060-57dd9c5d8453',
    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FIfiok%206%20(1).jpg?alt=media&token=e285a959-5e91-40da-a2e6-de9637e10feb',
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2Fportrait.jpg?alt=media&token=1bb474a5-97d8-499d-87a7-a8e63f6dd6c0',
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FDSC_9527-2.jpg?alt=media&token=37e78ba1-e017-4593-90dc-e5f13030d744',
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FJeremiah%20Portrait%20BTS.jpg?alt=media&token=6ab0c548-5749-41f2-970b-c7eb11d02a59',
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FMc%20Beto2.jpg?alt=media&token=505beeca-d568-4592-9949-9788f29910a6',
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FProf.%20Emmanuel.jpg?alt=media&token=d8ab2c23-ae01-4174-b4a6-ca7cb3b737f6',
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/moreImage%2FCeee.jpg?alt=media&token=1d22ee0d-c3f9-4739-af09-625dbd91de9a',
    },
  ];

  const weddingsImage = [
    {
      id: 2,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F12.1.jpg?alt=media&token=c9f3a0ed-0789-4d3c-9f80-21bf1e136512',

    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F13jpg.jpg?alt=media&token=e7f22ed0-8c2a-47e0-af6f-f15fd8aba108',
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F14.jpg?alt=media&token=2ad1c82c-f26d-4ecc-858a-54277310c22f',
    },
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F15.jpg?alt=media&token=1c1c49bf-ea2f-4bc3-9247-09222ddea292',
      delay: '0'
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F16.jpg?alt=media&token=0e53330a-5452-4d82-8deb-446501243c39',
    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F20.jpg?alt=media&token=9fd20991-305d-4053-9c6d-03466da1bff0',
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F25.jpg?alt=media&token=939804ca-061b-4ac0-8148-36cf7ccc5397',
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F27.jpg?alt=media&token=08b95b44-1054-4ac4-9b15-9abfa8304f03',
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F28.jpg?alt=media&token=94ed8963-28fe-4e9f-b05b-9a9e52f63383',
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F32.jpg?alt=media&token=d719dc7d-27ce-4634-b820-1fe34e199f1a',
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2FFor%20whatsapp.jpg?alt=media&token=ad613edc-fb1c-4fe6-82dc-e980c7852fbe',
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2FIMG_1851.jpg?alt=media&token=9de84ecc-c82e-4c0b-a292-94f5ce078c7b',
    },
  ];

  const headerLinks = [
    {
      id: 1,
      text: 'Collectios',
      section: 'collection' 
    },
    {
      id: 2,
      text: 'Weddings',
      section: 'Weddings__section' 
    },
    {
      id: 3,
      text: 'More Pics',
      section: 'More__Pics' 
    },
    {
      id: 4,
      text: 'Pricing',
      section: 'price-section' 
    },
    {
      id: 5,
      text: 'Photographers',
      section: 'photographers' 
    },
    {
      id: 6,
      text: 'Graphics',
      section: 'blogs' 
    },
  ];

  return (
    <>
      <Header 
        to='/photography-page' 
        page='ph' 
        logo={Logo} 
        links={headerLinks} 
        booking={{text: 'Booking', endpoint: '/booking-photography'}}
        setCurrentSectionId={setCurrentSectionId}
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
      <OurPhotographyWorks 
        id={1}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        title='Collections' 
        images={collections} 
        subtitle='collection'
      />
      <OurPhotographyWorks 
        id={2}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        title='Weddings' 
        images={weddingsImage} 
        subtitle='weddings' 
        ph='t is a know phenomenon that a wedding ceremony is usually done once and the memories are needed to linger forever. A life time event cannot be well detailed through mere pictures or low quality video. A low quality video makes the event boring and absolutely ruins the long lasing memory.
        SHUBZ Visuals creates high-end photography + cinematography for brides and grooms. We capture your WEDDING, also your social EVENTS and turn it into a forever event in form of cinematic pictures.' 
      />
      <OurPhotographyWorks 
        id={3}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        title='More Pics' 
        images={MorePics} 
        subtitle='more pics' 
      />
      <Pricing
        id={4}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}  
        prices={prices} 
        page='ph' 
        to='/booking-photography'
      />
      <PhotographyTeam         
        id={5}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId}  
      />
      <PhotographyBlogs 
        id={6}
        setOffsetTop={setOffsetTop} 
        currentSectionId={currentSectionId} 
        data={graphics} 
        title='Graphics' 
      />
      <Footer type='Photography' links={headerLinks} />
    </>
  )
}

export default Photography