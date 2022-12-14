import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Audio from './pages/Audio' 
import Filming from './pages/Filming'
import Photography from './pages/Photography'
import ContactUsPage from './pages/ContactUsPage'
import ButtonScrollUp from './components/ButtonScrollUp'
import Distribution from './pages/Distribution'
import BookingAudio from './pages/BookingAudio'
import BookingPhotography from './pages/BookingPhotography'
import BookingFilming from './pages/BookingFilming'


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shubz' element={<Home />} />
        {/* <Route path='/audio' element={<Home />} /> */}
        <Route path='/audio-page' element={<Audio />} />
        <Route path='/photography-page' element={<Photography />} />
        <Route path='/filming' element={<Filming />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/booking-audio' element={<BookingAudio />} />
        <Route path='/booking-photography' element={<BookingPhotography />} />
        <Route path='/booking-filming' element={<BookingFilming />} />
        <Route path='/distribution' element={<Distribution />} />
      </Routes>
      <ButtonScrollUp />
    </>
  )
}

export default App
