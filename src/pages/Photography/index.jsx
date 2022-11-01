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
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0472.jpg?alt=media&token=71df04de-72f1-40d6-9d6b-cc3c1acade3b',
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0473.jpg?alt=media&token=beb86a6f-f30a-46c9-a041-6132b934f41a',
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0850.jpg?alt=media&token=cf15ebe6-e998-4491-b2f9-78afa9187277',
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0878.jpg?alt=media&token=1f378515-19b5-4fdb-8ace-bfa2178be1cf',
    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '000',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0881.jpg?alt=media&token=d0d2bce2-76a3-4dcc-aaee-81dfa881cdc9',
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0885.jpg?alt=media&token=4a419620-ad6d-4659-bed7-2e6aec5d0d22',
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/collection%2FIMG_0890.jpg?alt=media&token=ac4e3b0b-c190-4e7c-8299-2898824b3b74',
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