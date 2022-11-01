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
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F12.1.jpg?alt=media&token=c9f3a0ed-0789-4d3c-9f80-21bf1e136512',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypACekkgaAhnQM71Xf1LXh9FzP0Rl0ODKfxk0Nv2jbzMBTPOyONlRb7gMfpl7KOdX_aFoiBYlT-sj0kUKzNrV0ho2cH_xxv2EVKvZgPGV7OMllFvwy5zf2I2NR0Vp1xffSJoVSIGB8WO02K6wW6MJxh4Vd871L0omto5PATFhbtunJAnNOuUqhgzXOnTmfxDGH-PFU0tN38ZQk9aRrxYbIW4M6DZNLnGAHv27RZK-KFAddY7z37B6tQ3ITVvqo7kz1SOoA6__2pqdIJ3ot5-j-8xp64CZjYffLGaJKRJ4uvq43jbZKiXZHNboUlfeeeHBXB24-wa-0av-WKLwQajn650tLJHe5gh_jqCcR5BrUTvgNiZ107YCGTdU945yienniBPR1bMGiMT9UebYl__5pL_6Y6lUa7WrC4HLhyQLxyoGajzsEqhmBoOKU4PIeaFENAHxLM0V2_sCp5GBKEbY669KPsdAxn72UT6GTJZQOwBAHvo28v5pSHULRLQqR1XcRcbR0LyPcXdUOo2u71ukPvhglFQsKMsm9Tqf9a1JtCUsrgg62xQaCGKtoho15BdSbT_bzrYcCRdCQVLQJ1r0v0YeISaXbQ8fETrc92UFh86gSLvdIn_jYl0CLJO87W3xAW11l2e14e2jS8WvOkIyFux66P51qnJjenmQX_n47tPlkRcUaHczG2PN0j9WAIKEySfShBL7mQWCbTYFlbRt5ePIF5or4n868ptvEKeco-MgNKOT13Y8qycauurDF0ZY_0LCUJOs7X-yLknl944jW1rPjPMf78lmyDg_xmPT66j_K-lBmOiGd8duRkrK1jEnToNF-NBmW6RoVlwwy0BgDVhubfwkhISeYAT2Bg6oEuMEM-OLyRIioQZrwiaDqDL3BlGJ0KXU_DAJg1GQpLiNv4OiAskfLvHYGJLNXMQeUdsyci90Kz1k2MYRBfKDzPu6fp_5nHdYDVJj4QGVSGVPUziPr-d6L_R4-BkFwVwKKvXfNC34fxf1Z_ISV70398ejezXSIdxP-vVZB39pYJSC8xd2ERwaoAV_FHZKDT5KTaYx8219AIgCR2CAQl_ltvoTnXDTuJkIEWchZZbxeOXz8_7klEzMKVKg_OABdwRxCSKn1XyfFC18FYz2DpUWelLHcyRPzgj_rFHkZ81-WEcovgF4S9cnqS-_wYVYpZhDuUM3Ytl7e0jsgtuhXHUTQ-JQdUzQZsCIaEVWmzWk6akmLG2EhBJKQPqqqBhpKgxoMvc70CO_8FWbh9mwptvj6iGrZkeieTtrDuTyzOBYJuevTNaztFsuqzU2ow9SYCViCmstdFYI2il1yhyJ7avvoDRyAaUJtBHysX45V8yRZCZ0k5IyIsrPuBoaIdDYehmR4l4H3NClb0oiRqzzwaNiItU024NGeyVbqit67djfav0getH0mubMov-s8waumHmyEjLUMEYdZefIws99RXht0l_NkAaIhiW7Mg47Ler3oZtaQ=w1114-h654'

    },
    {
      id: 10,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F13jpg.jpg?alt=media&token=e7f22ed0-8c2a-47e0-af6f-f15fd8aba108',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDANph3mdkgJjUoGR4Sh-QqoNPI5TbST1aTp00hpvV1UAFNsW1OSwM_WP1HGb3Km5_YAJwZGWraBznvpN2eyQfaVydHtnms1_WgLA1SRtXbGU_FN6vEjnyiQsYfsofd-HaMF-dveNhbQ_d59X3wWZlqReQhfz5LxR_az-65eI5t4pWAkDL4JnW0KXnCQF3KzW9cz3505DODyWCmoUMuYRRO7j_F6ZUIWaCRRy3dVYjsJuNCTfLUrHrE9Lcz1Dy1xsAeIuQpBHyTMqkNDq9cTKlGyHdB_pNjf1cHyqgPVXyFBjsQYtFAwP-IOLxmZv-Xn-eotDRAIjCfARJ40blev2wIW6vVnerxw29Wd4N0t8slHBkpI140gW95cGK8R7WcyHwSkaM6Xpdw7XK5FPguVrpS3qAmI6guOromY2h4onapH6GSuuHW8Vw6A1vO6hAxRaZGYP9hYDWErkJzWm4C8MbVcwQm9CBoec8D1vGMHC7VWvPG0e56fgJJt_Mp0IIz2e6NeJfkW5xfkPIqKhGJ8xL9vHwsum2OCyKiOY9J5kwB-oMced7PHw0yIKVSF3nsZHjXcpVwVN1xyFXb07jVE3acJ4qgFvhKBayuxXOv91G3MF2hLqQAt-nx60fExN3c1tGTzY8-yZb5eyQ9gCu_lVgRqVouWGvixnWH88CcIhViTQZSw4jD3ign8tCT_cIuIUTRiaYsolYTq50vFKel5nZ1fzuXXD4uhJjai1hp7La6-i9jdg6ykKglvykFBSzeF8W0Oae1wpjGZL01NLxbN1Too_ih4oJkmHpElXH93GR8jNMw9SL6EhwEJgYkbMhDyBT5a7-bbxnzsb7rEJz6M3KFnYw2B9EXmK8ccSwqSlctsbLUwLB_tHAbCcEtCGtuADvEr5diKd4yIIS1qTf8l0M8G0ue8jvewUm6NV90b7eYtXjTW00GaktuzS0Ni_5jfpVqj2_71YJUYhD3AtTV4PFriKTuTfVeiv7BYr5SJaCGNWAjDfcp7tWD52GT9vPvcZzBW2MnnfETXOFey64aATATOdECui6xKxY0G2c-HGU2lL1PhSD1MLiGLwTGVbXOqI1v12E3uOBR4RMRrAsWcQC5eVkhgDcDkSZPSepzNe2LWl5j3lR3_dM7tdo2QRLWBTMcm1toa2zfqfr8AewDhqLW5jjpHWqhy-Bk6AWrA4Pnxim0zt3JpTbSezenqhGbkYi0ZeJfDgG-kJjl2Qh4iwa6f-I2FS_K4xa2ac8i-VHP8gZyeZRVIqGeg-QdmYRVF9iqAk2SxM1t74xjWUpkRj94fZyCFMF6Uz9EY53BIGXgkQva-DCjir5YsnYQaqBs9tHmn8hi8Rmx5XF6jzdfJ8W0SvJBsG2n7-pGlb-xaBt10CjX1IVzgArOHa6Lrzlq_1IKm53kpQOwWpipEOrgRDBoj3nWZIIu_l1vkXQAK3FK5rZ1vD98XWYbS_bj2t-Q04g8pagc7GXXbm-vbmMNNQ=w1114-h654'
    },
    {
      id: 11,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F14.jpg?alt=media&token=2ad1c82c-f26d-4ecc-858a-54277310c22f',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAClEX8vZM7TOOSo_QLMNm2TGMDFgrTxDDCpuGn4oXYehYMZo9qs-8utBWp6_r5NevWZE6FEOlpq2X65OK7z4t_sR0ZiLo8nZLLrKVGNU2MTlzfl8um8Q-wNQVJlip0v34sE5bAcHIf7FoQSE71lSHmZa0w2WXB735K56aJxXdjAJDKPSqSF0ex4DaDCmAK5MwjDUdK8SYQS9pYaE4xT61Jjsjv760XYzzOxOElZBOTtqEhvOZlfzigqe30HP7ewT6amtR8t6iVC7JywTsM9OYgGdPkuZsjGRaGkJTUH47Y-HoKl328x0k5sB2xIfO_Oc2rfeOzORrmeRw7ONbar8-FzIlnVjmcUMxv8XPHQH4BNuFGgRXpFV6V6um8u8UCN8iavjeVVwg08OYPNeoHty1IsjLmTba-rmfK5vjzXFEZrypvWkSvHTYTP7IHx3VvidhNZqrDVdjrmPAmgZT-9u_TiXiDMjXBOk0IcjU3Bq_-gDXQWOvMeiINm0870aQOkTUZ2pBPVhDxidmkuT34Fl2dn4AE2WUHe1vOVEW2iXVmiOfQZ0Dmn-DkmlNjwqbYoAY4dVS9pgShbCjtO84vNJbGGHOqAPqKwMUoscfYmYfWFnCSnSFtErj3K792ER-8EgwWv18tBzq-jU5LG7cXivI-OtBrf6Oppk_7fFu5lCiy-hcST-2wdtZmOhAe63mO2f4f7eMCpnFr-Ei9g3OFjUyJlLLwjD-XZG3aim9s7tskMufNqz7_kIuB5cXZFP9zcCTGZmjFyetEy3vIrfwKbrQ7wpA7XNZeVD6sRjHKcgs6Yg1iWNgDecWvVnrp1bjBOEwQxfwMgtK_-QyJqxrUleJ5ZSJu8IUOP0iCuHJj9zubkPro_GIR3imQeWV9wnmz1opzFV_eVMuVirdAmMXd6QN0sKKESxYUf9X5kx4WqseneU9iKbwE4YVwbOZ0bQWikarurCgKC2NSmy4zlyr-VbEEemLT3-lXHRFaLR8qSluBmsGBkTKGnQKgp9f2fxqkVY95xmH8ucDeQeoQCKp0Mdr_5gEbCCPbxbiX_nV4Ce1_c1BDQHFrJIwD1aWFW2XKHrB1qQwRKOPgd1kXJ7TbgtXxwkhPOOW3JdZSUEnm8RMatyzCiRJCB2j4vbYjLmUJ6wpiDSZls2uJpDy7fsmcGbqUiN-CIkA63oTDTqAZb9T9MXDXXjES78kEjzZC92SObUGbYfd9JelEgvuvRxtMT_h_3Iulx8tyOPzc0GRsNqicL_PR44tL1Iocodi4YQZFPr6FySq_Hkijbdw8Ujmb73tA-921-fjMuXgTe_ckVHDTGlt9GN_OvBT-FDLzRoJ_jIdL7fnUEEufmMxS6sGUeuToFA43HKGVJnuViaVX95vgLbWaBvknQ1DYZnhz1zy_XPNtlFJGq6Lf5lOE2Qbkl9oPDmqg0FN8PmmTU5e4bQ50PAjdTDkDOv_YVVCJtlDFLQkdqloazaAFhH9zyDP58Q=w1114-h654',
    },
    {
      id: 1,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F15.jpg?alt=media&token=1c1c49bf-ea2f-4bc3-9247-09222ddea292',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypCbVomUdO6slqP8WvnljTM7jrd6ZMVZZGX4qAtYXDOn-9pqz2m9phRmohEIPOrSLNwXAJ0pkYBCBCBZr68onW3c1dU4D2p8pjoQtnsqCIQIZGHIDzd8v6LQ3tapR6KGuwfhTd0gvHhmciPTjEFw5wzIXELq_0o-GT9AwkPS65s__ZsgiQr3RcVr4ilqBQ6EcgxVHajBb68oeDy-YRBtBwFKcbPbB6bt31ar3JhWQWo47Af96pN7MnHSDkDbIFaXcrPKlyycIleWHZHZwt24gKyPELgaqu0Kx8JSDC7X2Fjv4KSpWxQcV4YJQv4zzBQgBeO4mYs743J8fzDQu84fsdQYS7xBnuSH1aSvpWxa3LpiUkYZAuNiMRrxYjUrKbsMNqrQVABw-iV0FVEnyQLCL5eCTmpRrUixpNfzxBYYMb7Xa2EpfSwacsgUilIl7zYPhv4GFmfMunbsgeFp68y68BxCHcqvjESOyHm9ojP5JtsLHrLIOyiRofa-ua_PJVV4E0HKi8rv23OGbhwB7yBFfRZ0Ygl4c3rE1-ntsqdpkj74Cxu7_LWfhLIPUmaAPOihXptV1Spo9zz0en2gM5YLStBYrieEuCEiTq79_Q5K3wq1GR6-lLI_u5EOXf9Cq2OeE_i2MckJAZNMTa2K5utSplAySKTpCCpH22IscPyrHgUjHqAgwzWqOqMGmNR0YFMLM8Az5giecWCQCrJnfjDPxFG2sbv-TXYMcC6P0mDVFyifD4CaXXiYgT_9h28kl3uc3wl7CNdVkQe3q47vouosXz926wrczxloMVE9XFc2cDPbFxCh1hedzNmwLBgjH1PokuRleWYC4LRgLBWtUTeTQ7I_mLT6TayvJqmskoZJwoR-oHFzSWHGRL0bo3PmkFRc18dnh0w4A2-5Bh4ECb5lI16YuPrbknCn5DEpdJ350ivjA63AuDWegy2fL7onHHF1M2BWInVyXsTZVGhwog2UwGbJBvgLHbtuwmHR_FyyGo-TxPLdinKkKhGOk1dZRSga_OyvfBi6HAQTZ9F6MS2LitS7PGw9wneIfule0VfQUAtxe-HiCfhtFzeMHgYWdQns8afjM6DHvTpmRE_gwGfR6vEuFTaOtGzIhSmktE1hzPAZfzUmGG7o2rbimD5GPLjCmtpLpgL2sz4hvNZ9W_JH_VEhrwQ57awuLJKkOZy8m19zvBxyjJjmbrouAYAzDMW7iPvRpDq72FCUMP8S69kp6hvj4TDk1wK5IwOGyjBig12HICVV5xmrqdGTY16Yc9YlPB4ZZfeSkOGjEl7UCF06FlJYHk24NyCkz8Vta7MJgtc8Q2Q9FUrAiV49mzPQvWdzrYg7meaMHKiwOLn10w-mVdMVOOW5a5C3pUoJG3LssU83Sa6r6cvtQh_LRkqF4DFG3x2ltExWAf6f-7hJ7gWkUi6_J80ZYNQ_YAeHZBMILPkS6L15lcuhwtcD7i1-oTp2PmPQ6oD7KT1bCMj2qCCO1Q=w1114-h654',
      delay: '0'
    },
    {
      id: 7,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F16.jpg?alt=media&token=0e53330a-5452-4d82-8deb-446501243c39',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypD9_GReceNrEaYCNMnGVWDAAKQkDCLakTaGCRNHndHssZDLjZISKfgGZe2xDN1k61rq4PJ36c7jd6eusbVZ4o2XIlkXFRcQglWNFkozCUpdMNtfaHEt_if3VkASEcHa5zCnpQpIofOFCGjq0DsqMgs0V97dNXlGB7gkPBRbxsqEaOEUbvUQHwSYwIG-jC0bCDMSU10wpXtJD_XxovSjm7woE__6WfpOj6FsoL1t2jpsn6qgMvPjIFMBOcx0Y1oc3LZValfwnky4ySANNNPPb2OxhtruM4h139AlacbYqk7AZY8mSZeSZdL98gjMCPHSS7Iljdq3UF1KpkvWMPqcn1VJ3o0vEbKjfsNofnOA9eDGrwweyp59SYhAvUHA25mERiFZIvWMPEHuv3tBFKkWCzr3bNdUBAV5cFN_FEG6fFKTLFApWEVf1cxPVPn6RxFcsVJ9b6GZQaaLPBlhojtX6ShoCHSMM8j9NDrSePhxttrogZysHSLkRkMdc78LSlwOq0VyOsdLKi5jRM46wOUx1jnBVGRbiZAcWe1nx7hd7z98EcKLsTgW5UyAl9rENZ5f5ITEuI1CgtsfhUrVn8kl1rwbWwIhY6vjxpXgbEpkSQ3qn-HDF2G9CmEj95qrV6eslxUm-mpvM8Vo5kgzlH_95nIh2NHy7dezV05foSlCOxGkXYZRPBRXsAuvn7ZLStAZ6JzCArNHz27N-M9lb4BCp762duG79oT-nWzL6bM9NfQvNzSbv2SnxPO1H7znBIVUzhc2KJ06wy4JCf83kLn27As-PzA-HTZwY__pyMSO7_PHqRIhPlcDUF-0c0EMqoDsViTV7lKnRPqbiPbngL8UEYgm5skFncBiCCrLvAykqF1mElSiYXpUlnDaigwtqmrtb0VtRI5U-xIHV5pThJ_MbLas14WCu1pt_anC2R4jw604PmArhKQiMr3y5K91nHlPtjswnDwpvoRBU7tSEdWeHtYlL1hbVaKiie5qGbq_l3wOSTdPYrQQHFmKWNnuskgguiemfAINojDDl6Flf-sMuFFs24n2emQ3nM_ZVs5tj1SzfXjee7XiyiDpKByNnX6nS7NX0-LBbitNS_njdUDp_oS8nCMMIzgc8gF3kxpRHs6PKfw5HS__bfvF-ch_pCD8uIyPk-Ki8LHxXdACQXAiYNVdihmBbMTBRWgiXkRBRyGR7B9GeCOUzSkPgNatrTwlnDoddZ_2Sgtv3YF_4WUhnzrdZtj0VDo3ga2e4-ypOb4z66cpcXuaf-YtkVAg2C4q8begm5JQQyEB6Mm2G1E-YG41976NwfEm-ahU5uvEVZTh2dcC0reCuSajm0YUvtXt6-8DyIvjNHDNam-ivb9lIAvyHgDKirMdJRSOwuO9wuvdjRToUa6TELopjnDMRGj1kXuhGqbnk6c7f3bs3RAk_uYkxsaAdQagGA7XPWBUl9JbYv1Bwy7MBDa3LtQMt-hJAO3ORQDAstvuwdKJYVuOrA=w1114-h654',
    },
    {
      id: 3,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F20.jpg?alt=media&token=9fd20991-305d-4053-9c6d-03466da1bff0',
      img: "https://lh3.googleusercontent.com/fife/AAbDypANkcX8D0YCpot3E66Oh8nlxMF6UvvFbXm8QFQLBlzJ3aZ367zlADpQGvxfPFeQmYQXSqrVq-iMnDRmBCl_Gq9HAp1eHb-fQXyKfB9-nISF0U9n0D7N5JCUPMp3YGC3cUs8Xdc8xUvIU8X3UrynqeSehVRc6ZKvTcKOU66Bq43STYoXAX6U9ThcOeTtdeBgZaz-k8L46I6pGaif1jzMYgxABFOhMQ-BrPxpMGGI3hvWYQnA1QIbLp4s-2pe5V0AWxqTftQBsBiFO5ddcgwgzeqAfMqqlHtL1nHqtdLyCxEHg94SObOiRRuWP6RBzIYBLDDEMyAa_hnPUAuyOi6JHVXB9GprpdLl38nO2Bp5f1ToYn_N6ZSmSqVNMbG_QNvyAPC7MHnMCyt4wU7fqaGdVidbEQg_i5dc9l7rLXT07Ktt4MQr-czg7uxKPJx2c5ewxeO_DCe_HO1uWs9xOSZNOAphdOm8xA2rHkA776eZfE0wgWlkXhgc5YciylZODwlFOU_OUkmy92LjgPlimX_rBSV5kja0dQ8EGxg_rBhCRAb3-gJRiyIS9tCjoXJiLt2mbAWXYy7aePDJWwidQ0xxMkD43lH-JHlSTC2WeEATDcQfhDgeEGesWFbcNNR4VAAfMfFdQipcEnKqrhRvtmg_TB9CEdjJYqTMnHK44lG0ALKwTHEkG_yMVpTadFRRqE0ERtmk9R_heAxA8YReqr7pGEPwskWyGTFsaARx5_bJVOddJ2wm_Iql-p3lQKPy2nHu9bD4Puv3MVgJKsNASRikFl5vujwjWGH1zWPX09uLAHV0f0t4-SAbBw9F3pNyrUTeWOF2pA2cTbl5Ebtf3h9IAbSUep_TQuUi68TvMra5hzNILmM99inm1TiNqhgiKQk9Types1Gw72fE9Sm1uJwvXH8XUQdnOrFLr_fm46iGdaPY_bmD9XQsCmi0-ysaJ_wH-hU74YfkjD2reYrmFFF5bMe7kstDgbJVVp-0mvswJ4r5ONM8YxdzeAu7SJGFAVrw1wqZQf7yvir5iw-7W0YSm64QvW6LfqPthPa2ylYewJzKi4TSZcz4ULiggqit6z_Vwtc1-uUgwFEYofGUeS1-4MKLxOtBlHhNSKvJDUNw1ghaVkDyPQ-VNeK5uYxW5GBgFHw22rfb-9oYQM7-JYjLi9dgZsw9pY_bcJVshiu3L2kw4oyThCuEORz_HQeSY_b2civFwc5sskrPDRmxw48l1NcmN4tA1cH5Rtx8BlMqfTWf8wa6PTrXedd8RdhyRRdOlJloBIqR0nwdVCD2UdHtxgc8ib60mNFLRL9Ll-8Oyr-2ynBs1yNPvtlfrpiE4QbXM1DAxp07VfHnipiqulwvW3eEMB684QKANTn-MvBvf7x1gZY0PoU8oLt4jHfDspRZSg3IWxhqFjoevJ5zaCu4KmZoRghSPQQVZRVziQb6R_zlB7lG2ssKxXjmiuT03Ua8YIDu-PDqweHd7fPdgm1egw=w1114-h654"
    },
    {
      id: 12,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F25.jpg?alt=media&token=939804ca-061b-4ac0-8148-36cf7ccc5397',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDmr_unYDyfGxMfuf_RPHzgjFSv8KudeKDodQG8Ib1hJlF3PkhZ5iitjZ3a-KvXYuQck_4IOEAHYPZjty_4LpKASzuuzevezAp_scGbAi-US1ezax24bvc2v6oR7Pk8LCiTn4JwaiOFAb4cX3rc51maWOZWaGBlwsU90ZcVrLwTtmAyUuiIXwSuLjrH1mAhg-hx5dJMhK7rhzlxHwWD7-SYzZIvammumS2XrHpIBFdktou9TIO2cdWoaBa8lQTGG_FHUu-P0hO4l8bGb464wvpfJ4O2_y7N0i2bTF8u9fKTI2_4YmGqZFRfA360ADup9Ud7VsnOShpEe9ATHIVgP2wX9kovACj910qCSBJ8lKUc55gpquJ-_AL5AnUL0tYpNLBZs49goZ4LxjCZfs5YEb2Heypr-nsewml7SzwoWovjKbjVmlPfX6EQqM1WId2tXsFBNdVkvjRKnClh0RTOi4COZDeVN_gK8SRhxxFy0M-gk3Uy7Jrj89KIvwJIo9Hyv-HuL45iuWKt0FqHx20c1kGFnZkK4k4ulkHnMsQ_0aE58HOa7OlyjZSKCkSqROkR_mI2msfWozRINXOjZ2JX5-fA-FnyyGUwZud1fx17heL_XUREVIk0V_UePwqj25NlYnerv7ZlP3d_Un0ZSaa3uwhtv4VYhSdp_Ir1WAJhklt55w74YtUuxgrb8tdpxuIYsM-WElMPuvFHgA5v0M5g4U_sSikv2ILAgVf4SBNbGgMQCbHzjImqPS2oivoS5Om2R4IeSvvySArLKV6T5P6dieW7uzSPF9Kk7wk6fVKBvTRgUbA45MqOMHJqNmumsG_vA8J-KSHeHg5ptRmgqh-VZVaWuyd6D7oqC7jmUnq5HpNS2MD_07fbf4KFU4CgsEiepZJVwbve3-632-GR_BjJH18Xjafnxyai-W4ix3OBu3v9quAOe6w757iA_xkbXl4fhGkLlqE3-6a3rQxxatd2OBZTh9syOCo7MDZmhU8Kf86wNAqgoDtLFUK-aRB520JxApocdl7ZmcATHfWtGBL3jFDztO_S7jevPKPDYfWlIZp_TutwvHyZHoUWASNB4o2Ql00RAdOlXaO9G7UpL2I_0xhLi39iVbX9IyqDEQAi64xCUzdskhVRqrlvPGw3bPMiHuyUx2gMC4vysFvs4bZkJf3eLCaTITc8Vtw2WKx8v_RuouQwh5BPYUJUT_g08UOAfUTwUp31YPEVftuOW-V3Qo-FdPhnlDokB7jVP0W_JHGtmQr18Q5sG-Fc9dWdckLph1BIN6JCfoN8CxfAQX-ZHWdT5BV9goOaTBvIPXruRvrQu8VluGaHTzt_Ylos1Ru4NKXVGHDrIDxi-a0NlPbRV9xjuG1AhNYqf86pvctkjUV3tiosO5rs03rIbj81bFBth7SfSpvzsKHaadThxauQ9tW57TAsG5RU3T2xWniQkjm5z9tls4MpD9jeGDIsSKOp_PUaoUBgFlE_2ZCRVrWnoQ=w1114-h654'
    },
    {
      id: 4,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F27.jpg?alt=media&token=08b95b44-1054-4ac4-9b15-9abfa8304f03',
      img: "https://lh3.googleusercontent.com/fife/AAbDypCd6j4qxs15G1U-l-a3pH8MHxNyzellWr3q11bUdjELwIEY_zEwi7e0p6A-z4kZsJz_DSruZIZlEHhtRMw9pEuXrErL3iL_J8ExNnn-9eJESAiN7B9H1xbaytfAi9PdRbIzGEEiIYz8__Tfz-X0dcVQgqicOyVE1xQbsTgKbMDETI1yA-BXLOjJPjI5pAAWOLGoeVJUMt1gEVlAURb_PTUinUtxZUILP515Nr3Uiu2rLZ0nCGRD-2jmyCqpuLhleciNVQD5GsdnyGA71h6JWsiwvcZSvODziJh9e6SotA5t1U8LbsbhNv9DGpIOkx269FV7_dXppKgw2_s1UyJRgQkDkEnspM-abPwQx8cS4p-T9w00U-WZ3LbXBNVpJGA0C4ZGzAK-ygXmvUY6qxQ2kVIc_VFiuA2i6GhRH0HOo6AN814qYxsURJYWGjBzgf3LOqGoAXeEL8W6Vf4dePrgKj71VeHvsBGEVysHCT2tUQfbx9L_yR4DHHcv737TuAoZvBdAa4djkD0C9G9_PZHk-Za1uhwa-rqGzrL_iTpk-HMVbNuY_rlTogu_zDfocgPd3faSdP9dRAkDAn-P0PfRSF-_XXSL7nImA_7cutmONv4xc8muON6tnBxAYfxdI80KBg4iMOKuqijdLSCqa7qH3JQFgjEBY2bTwcHxh1DR5YRBoPwgzoVGEsrziRHPzC-RqXjMnGZ-ZWbhVQRZh2CVmXyDhyc3f7KkN5ywKj9eYIQUnddeh3h1rHKvINix2WamOAxr9WrOwEMGZwo5yA0FUwc19S3yRPcs4eVc6TkjDbisk9VxUKNHMQHJ4M0fBLXeOVwmvplyAvvoRdc1QOAPMgeM_lgLg1qzr5gKQPLGi7iX5kA8hxGVPE-BqF3MZDi5wRdg0tv9oeZ8NTzViqUGHGgRDfNn6TgYB7Ufl_r_bs188sK2lJbfvuEkHFfLTQL1aeAhm-7V1VEjz6vTT78gGi0EgA9YycUyASBsiej1TnbZpAkDiSSe03myuyQ_IirgLXmHXnB5XXiz39Yz32rOuKSjA13WhA72NcOJy-TBUh81s9GR1H-0AfAcVmlUHFmKosRfa-HEJph4kojFiv4HUL4oiM3sdj14l1jkuYQmo_5yXjejlXdtg73XTIXMYtiHvT2R5B9qkND17Tf2RMERR6x1agtI1Jd6ihRb0xMWdN0v03wdk4Jl7NB2W69PVpKo1774Z2BywJUOs8_zgSXBBFWbO-so5eobNU54D9vWDnMUbC_1QXZLjN46LmmNi32VDcZy5ZgpZ9AiCrTCiuCrucwZocg3RcIK63naCtDvK4P0lK-vEcP11X7kvJh7IEs7WwHee10ifyYhJjYCDojC4GR94msfZCDK6IG_7ovGGBPhind0rLYUbTHpcTcNVfWGTiQj7_YfB8Hfokbhd8Lkmw16xVubWvB3EC5ZeGCRSaMM6LGgKlLMXs9vJrsJ6RSheTRkKy-aHBhckkihQAflGQ=w1114-h654"
    },
    {
      id: 6,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F28.jpg?alt=media&token=94ed8963-28fe-4e9f-b05b-9a9e52f63383',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypDsgj_ZFd7jTejP010ZWtpQYe-3xj3pO7yL58UpoLeV6bykaEr6JkAHN5NgsSe9Hi5fem_OBAD9xd9ByZ7-l5xU9uOwMfO4XR_cb6b6qkk-GnjILQuFXsTdFuGl123a0OlxHCV804BeSGvOVCEBhYziBSr6KrVqki0dmo8mYyVLVV8isD6V0-I0HIeo_koy9eOedx6jWC3oYaf1DSF2OaSbQkCty3Y4Z2RwcRiVbdSP769FfwLZUHVXeLIIYrkSIwWa3-5cuOVMOMlSJWwYY9oV_gFBXemc3fYPxvlrAGaqvjjKpuDFZomuXz_M4FYHLSo5YRRsUfI8gHGUX0tGvDenWz8dYoyvKwlxksSoaemVCd61wsh_03utXxfoXxn2tEN2ChkfzAwtFXIy0vaxrtuq1Y0qOCuY50oJhWTCdW6lccUXWvoV_xibUBC1laUIfujkH3wYnSBJveVtAJIq2zx6EuwsEwonV95oz_9ukGVlFo1kddNQ6CHFg7xMREEAzrS3y2LbOxqpYo8A27_0rKx3r9rAZZ3Vv1BY51zshTyfi-5GDkocci_vqKVivIv1LMyCZLqgCrsNIImDJj2GvturFhLfYoJ33x-EDf0nDQ40nJAmq3jAvxIALFXn9AwNqI8F6ootxAj7DAyGPF_-OM99039MtOyLZLW-TrcXCLg8OTjdYuo8EZ-Lq-LHVQLqoFqbMuDTWISpRDsrA1lM_xJbmeYpTzpmHallFbnzLk-C4Ed-vZTblZZJjGdZ0OBI2P9IEROVR5t3e5x_YqmS1nID40H1ghpSlb089iVAZVb2kQXH7ftPVWukPkIPNijFhI8HspMQ5Ar6DFktLlvigl6_ZgfQOYxc1ETZeVZgaYYhES2OUglDaAtVIKrN7m3cch0lwRR5DWKrPK5fVC6HgAIatGIZTSLYQzYd8_68lhSZMbNDPgm1IYurCTwo-rKy99zAjevbRo-lLZT-6l_Dm0G1hQ6SnCI-a2JPCFdJrbuuHU09wXY_9xpYpP2ctRXNScPMvT86VeD8iHmvzKEso2JagqpS4O-XWANCmwag5WEUgDQaACMvyTODcr41YfDON63S6LRZBKBT93mDqR5qqpT1IxTiYzJiLlNEKXUnp15A0PqtmVWktYY0FpnAiigHROhTo69PWDQITCV9wnLS_lnG2VgDtkPOK6PcLzWt2gQQeiQaOxcYgN1qpklbfxpvHg4yJL-EKIUet6uZNVVAkCCYPjnGzBb6ZUoXRzrisHvJwUOs3_CsEiWjhftAcWg_GwyI3q77YkoLvt0OGsUEtNxbeHUEn9XvuhPT4uWko7dMTiBr_e2obeh4_I_n2MRBOVF7gm0tVHnv55_JImCzwlMF1w6Mz5VfPibL8koqQpHd7M5tRlw2Q_KmfZ-NouNILY8-TkkJ3DI2NW8pqtY7QuY7FrgOOCPKh7baGQwhtVeceWInLWD87Y1KvxinvMbvtZU8slcGAOofEWgf5YXz9Q=w1114-h654'
    },
    {
      id: 8,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '00',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2F32.jpg?alt=media&token=d719dc7d-27ce-4634-b820-1fe34e199f1a',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAzdLBhfj2bgNxNeVZyWzrESB26xBD3O38kajxwPYXOOqj3P6hwsQAOBo4y-BxXuLev0uAFCbxSIrexAFnocdvc0vfbb3BRC1zgI_hoW8Tzd9FpJtyNh2vB6Wg_RafSrPtrClnOTGn7b9WZjiiRo1OJpmsJatmCLXObDmyIWQTc5dc80W8dIcdJh-KY_frdHGghNXUib4GmY5zZhrgxAE36aW_wFV0I7HGUo5wpJP0PP_PlTiRrrjkcs_qH1CGAk3MzmpmR8J5CqT2oSSV_QPiKleQrLtuMjlRVe921qyf-_uCb-eDEw1UsNsDmKyaQrze14byhRoMAq39VpmJnYiGA-w6rxv2CXCV6qze-Tm9ErCQ08Fv2_y5XuKtsvF2-vpCwtf0NNmrQBVrdwuOam7jmFN1_yTMxz7aDi6LZpOYhH2aQEfd836PzAW1fe2taoM50_rBeSxqeTI0-d7Fo_xe0uW2O5WlIZjObLLAWVpIlqnBVpULoWBwo9IKVgd0R-roTSQo7LHwguWh1-6aEU81ZWBJrKTHR08f2g2U3j1m2wPqSgNqD9a5vJD95ImAwwboNZjOAC6CWPi6dpkHE_r8-EXpGgVnCuvV15ZFJR3-Ki3FZ_Hrhqha23VwPwxbxKA7EyTTpN_eBawKA3zdAEw_ladc1TJQO1sm9uHD_qjh1tYREOBXVLUjxzrRVkTFwFsovCj8qWu58xguYhwsO3gr79O2ufkwgJaqBI27ZlwKEvm9NLb1pK1OO9CfFY0J2elbGma9U7p1ooR70-86vC9YXS1pgWbPYAl7zyJHV34Km48ofGJU8psdQZj6-0-6xMHtTgI5TtXS7A7OdROLuMKFAyT1brsXvrjfIakhPyXsASZeeXurg_z9Nh8l2jHXCeK9q9TMt7Z3ZkZI2rmlG0pAnZqSX5dJSES22Qq-hlxUsRDGAN02DzBWNhv77l-WvERO0GkMddLtbIeSWl-S1lZlVTphj4VK4GMuST4nwJeC4JE__mq-2dAhUSPCEx0uSOZNqQYe_MNfZSdFdtoipudu2W9kWFfeivrYxYAFBNFaqGCKHIukU20QtRJIEuWb9FhGKGLamRMbhDgND1a_hW9EGTxIRqRnrgOxH1g57IB4pNOh_S1tpKSxo1s1n5ua3cX4yBtiAQyr3BJkjMaslwLqeqH9pTXBjoqUXj2G1JinD5qpjNMH-V_mWQ2joBBmE0-92Jp2O139GChJ2_SRLFaPyi_K12tdWC4s5Kh4SRaVLJXWSTETDluNSQGAt5BRPR8QdFozmolW8ic2DXMmF8xJQ6nGUQTZZOzWPpznoCJNGo7vhdxUxI7-6-J2HQqK24M5lqZmgNxkY6lLkgTAtVFoD78Nv-eKUtt3VLJ6jQVMWDtFCAlbuM0o8fl2LbWhq3cR4t7nTNlGcUHF5JzuLNosgiuu0m6RJK9pMl2B_CXw_GkKGntFIlJqD7-nOZSIuxFVDFZ4q3ngwK-wI5rgKCg=w1114-h654'
    },
    {
      id: 9,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '200',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2FFor%20whatsapp.jpg?alt=media&token=ad613edc-fb1c-4fe6-82dc-e980c7852fbe',
      img: "https://lh3.googleusercontent.com/fife/AAbDypCSL-LTe5d-AGTM_L0XGVmJPb_Dz2MQUwzx8-K9Dr3oilXYijJZ6OL01pKVR9OSKELqzpdBFVcPe2v93LyetvgLLafjltcmB9-0lGmgTEaLnGH7JpYhMDJTnQdrBz7ctmrXgC1GXBHJOZ9_zzsvrPpPFTHU5NYE_v4dBFmSSfQ4cNAKWUilZQCkX7_GDlHcxQjAPo2fjQjDzAnkLcVY8Phwv2n07V0yGDJsbemHJq5D5JUdRwazwbg8cb5APdBWaBHMqzg5cswfyZweIERKs4U29i0WJuM3rCb3rhFeBIXn05A0lOICUpfqzUKXTVtNrE0BvvgtBp8AHUM9prwNbEXWzZt7XHaTLCG-8moU_il9nV38uQ79vM5PmRNv_vrJ88vIEaTZp-Qn3GWSnct-lDnBaimDzs3o-q4qreufUWjXBUUVdpjXKZYGv574wHw06f-07Nl9mYqovA5F-R2xZ1Y3LBQPvA4thiP_4q0m8R_IJC-jyEssMkMF3T9a6wfjnarWy0SVsOp4D7wfiUsdYWZMq6y9NU5uRAmqylV4PO2Ra1RrWAggvIkWvldIIhCaGmkgr2MRTmd2Rx5Kyq1V6RMsL94UGxUrowO9SGaGWg2Jg21-9e-BhUAfvA1xfaZgp8uS0S_0hqu6pDzHswvRKYc0PYYA-UmGn_G_2cvVSoH52jrw9PK7M8JdQOSbTWcVJ_X6cL-jiIbav1pY6dUBKM-akDWSrd1JOKTS4raX-H4yhpZMUM-kEgV-afn25Kw9hN9TKE8uvB3Xrex_9ERyvndVR9MDsVadweyppMZGxMJSauI5NXncIqu-OEi1Tf5_QNwrckHPt1_R6ihwZoTPY8Q9zn7sj5kJTkc3cnmXvetGOCTcMN3fC19jEsrhKROH47sTv6b84RR1YJeVaVYkkc0ZiAqF9waiRLpipZj_j6RGyI2p685SNFWimOuBXqtDI7rvvi6iypQ_ec_oGV3DN2mXxepLkYHq1WfNSYgyuj97ctKP7no8soHMmxTkMZfDNLLr8BLGUXkvTMSZggctKz6AEHxKXCjwW6kgYQ3AcnB4lovQDbWVJuhAlPRJz6gJhNoHz9T1RbwDrYnvNw3u8qSe-rpoavfMp4lrJTN4yXEFjjyYhNSC7j75HtoJJAjtEXCl8d-BD4WnGfGrDSSXD0N_G44hDbLgqXaALGRDXxFemSgD7VGNM2p4xAcDxoQRA_YlbGOvwnykzXZ1nNsiStK5Dqz6zeqsdVWj79Nkc-GTWeYXmBsYq15FvRUIemnH6tAXO6iy608lxEFr7pbL0EtPXrWjYNfwtnKXNozva54sUYqpVdcvvbwIayFEpiAYWYXQvkmrCJFeDJKkIISZ3WGx4P5hPpZ72ks68nlVi8nvr5AcyEXRkDGs4Rxj-ngk3Py3rU5LQpDvnrIK-M64bWREsFBd-juRGdoWd4pI8NS63VGXudVGoHD0a-6fkPPCB9G_IzXj1oOMLkIWvYmRHg=w1114-h654"
    },
    {
      id: 5,
      title: 'BLACK & WHITE FASHION',
      type: 'Black&White',
      delay: '400',
      // img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/weedings-images%2FIMG_1851.jpg?alt=media&token=9de84ecc-c82e-4c0b-a292-94f5ce078c7b',
      img: 'https://lh3.googleusercontent.com/fife/AAbDypAHgc8nFtjzOqQOpwhYautbd1Oos5pCKCPQOPVyvzSn6bimxurwQqTYwg97kc0aNzb9ObjreHVXG983SKO-RDMj1OBiJ2gvGqZ06t6GKvL15Miagt92D-bxug_gnSkI3qAEhBsi6xvUZwPL7aD8rrcsb0SmcrAVXIBJbjnCDa3BC-CtE125FyWE0KqFC8bt4TE_gJhzLr57h4HRCZj9aHHNQS8YQIaQmxL1jZXNxcKtYdb5PTAVY_3aI0jMj6zZv5HkTJm9WoSg3J0puM-de5GLJu-_of7oz6TIKdUTQp5SXPc05pSaKpRkTZ2d0DVvGFwPt9WgAayJSgkfMRWAHZGTEOOAyYA3ZMd3IITWbmgcDgFCOEFD9d_q1QMlwsCYSe2BA3O65klwLB6WpAPSQb-312_Vz-U64x8SdDppY8JWd-scf-TomyAUsRDYCqoOxbut4fEIje7T5YXum46n49sOnNFKRp_ZJO0XLQ5xg9mBmhS6DpmkoT12phvqGGZS0ye-EQ767KTzM0MRH7uqfOg-NDRNGZFHv0_DDss0ltILKWOufG7FDGLXxHYdDS9P4SU6mQG0ZhqSKHbDGgg0Tpmxa8tnY2RYyADIS_eaSa9zECu9NVDbsuY8ejoIR79g9_kvcJYVDBNPmprdTpElSjbv6sF0SpJrm5m2cH1syWqryFdirm31RHR0xkcPceul_Gb26ghH6ekPZPwmUAC1BPY9KmEuIygt__CJb3JlhrEn9Pwdv6S5zlA_XyyxBzGQrE3X4mHhAXaqMjzmgiTB7TtyfQ8GIXYhuBiOONix1f98wGv2dq0KYCkXfW8zRF5t_5-nX9giAGsQxcNJv_4gZf7kL5j4Brx4MbsiIFNnbuzTsBdQIgM69eRvPG7WGJAIPRa--RjQWmZtMA8ByM_pW1e6JkeOXXmJXmbw-rRvVw-qvi9GYwYYCjad4KQK9wcRkajbO0wLKL8_wKGTn2bPkQOORCFj0pQqX_RRSlamkn2WsEb82y1-J65zW15SkRbQyfQsqJKQVtAptrge2Fgbwn3FG0AHNNn8DVhdi7CBYtVau-4X9toQi3I_xG5mFk-V_bt05hQY6c5xfugZC5Yt_KAbtat4MucvQ-MLowwpaB2TVpIEnGclY7LqP5LgWp7vaYfCrkzGIVaZ2KYc0z49V8X_3A4zWJce5Bz5tbSeSqGxA_-USqgYy5xrIYIocOoQvpgwJrm0amnmsSJ58yxcwfD8DD1x8LWwtHvzUtWLovOd-9xbPVkAd5DpmQX429MdTRSMxE7m5Jdu1yw-lcJ9S0OjstexVIl6Nd3rKdTXJOIv3p4YQVkw605sINCk-MGta63uDOVuinY5I6g5YnqyOwCs0iYcj0MALFU6k7oHLvnGtvk9DxD3sr906eKViej9OCFVHam7kpzQgIVsVLOnONeBPnQDSzWDgZKza0L6I-zsxKCcC7wmlWh2id59iRE0P5UOM2G4xXHP6wn4CXXn4g=w1114-h654'
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