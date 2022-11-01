import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

import './clients.css'

export default function Clients({ id, currentSectionId, setOffsetTop }) {

  const ClientsSection = useRef(null);

  useEffect(() => {
    if(currentSectionId === id) {
      setOffsetTop(ClientsSection.current.offsetTop);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionId, id]);

  const clients = [
    {
      id: 'client1',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FBasumoh2.png?alt=media&token=a8cda212-8079-497c-a5ac-ebf88deaa8db'
    },
    {
      id: 'client2',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FBlow%20Pos.jpg?alt=media&token=811779de-0d73-47a9-8c00-697df421b7b4'
    },
    {
      id: 'client3',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FDryva%20Logo.png?alt=media&token=455a89b5-fbaa-4038-84ef-de6f673538b2'
    },
    {
      id: 'client4',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FIMG-20220628-WA0005.jpg?alt=media&token=5fa9a03e-dcdb-4e9c-be41-8480af77d9fb'
    },
    {
      id: 'client5',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FMade%20in%20Akwa%20Ibom.jpg?alt=media&token=99202840-fc1e-4624-8307-5ad563df254f'
    },
    {
      id: 'client6',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FNetima.jpg?alt=media&token=61342ce5-e187-498b-b480-248283baf3bb'
    },
    {
      id: 'client7',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FSweet%20Bride.jpg?alt=media&token=64b6fd8e-9056-4cd4-87c1-b96d928a83a4'
    },
    {
      id: 'client8',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FTinaries.png?alt=media&token=d85df251-6660-4554-85c4-ade2927f35c6'
    },
    {
      id: 'client9',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2FWest%20Gate2.png?alt=media&token=25bf85d6-e78d-4a47-83d0-ece466dcf5bf'
    },
    {
      id: 'client10',
      img: 'https://firebasestorage.googleapis.com/v0/b/shubz-d29c7.appspot.com/o/clients%2Fchampion%20cover.png?alt=media&token=a6d98469-48a9-44de-b9c7-1de52a2e42d7'
    },
  ];

  return (
    <section ref={ClientsSection} className='clients__section' id={id}>
      <div className="container">
        <h2 className="section__title"><span>Who We Work For</span></h2>
        <p className='section__subtitle'>Whether you’re interested from LOGO DESIGNS - PRODUCT DESIGNS COMMERCIALS - TV TALKSHOWS, WEDDINGS - CORPORATE EVENTS, DOCUMENTARIES - MOVIES, MUSIC PRODUCTION - PODCASTS, MUSIC VIDEOS - Etc.</p>
        <div className="clients">
          {clients.map(c => (
            <div key={c.id} className='client'>
              <img src={c.img} alt='brand' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
