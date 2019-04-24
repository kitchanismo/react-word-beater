import React from 'react'
import { main } from '../helpers/sound'
import { useSound } from '../hooks/useSound'

const Music = () => {
  const { isMuted, setIsMuted } = useSound({
    music: main,
    isLoop: true,
    volume: 0.1,
    autoplay: true
  })

  return (
    <div className="beater__audio-control">
      <span>MUSIC</span>
      <div
        className="beater__audio-control-wrapper"
        onClick={() => setIsMuted(!isMuted)}
        style={{
          background: isMuted
            ? 'rgba(255, 255, 255, .2)'
            : 'rgba(153,218,0, .2)'
        }}
      >
        <div
          className="beater__audio-control-toggle"
          style={{
            transform: isMuted ? 'translateX(0)' : 'translateX(100%)',
            background: isMuted ? '#cacaca' : '#99da00'
          }}
        />
      </div>
    </div>
  )
}

export default Music
