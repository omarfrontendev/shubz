import React from 'react'
import Player from "react-wavy-audio";

import './AudioPlayer.css'

const AudioPlayer = () => {
  return (
    <div className='player__audio'>
      <Player
        imageUrl="https://pbs.twimg.com/media/A-lU5FnCcAA1Edi.jpg"
        audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
        waveStyles={{
          cursorWidth: 1,
          progressColor: "#DFA539",
          responsive: true,
          waveColor: "#888888",
          cursorColor: "transparent",
          barWidth: 0
        }}
        zoom={0}
        volum={true}
        className='wave__player'
      />
    </div>
  )
}

export default AudioPlayer