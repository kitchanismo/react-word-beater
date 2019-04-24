import { useState, useEffect } from 'react'

export const useSound = ({
  music,
  isLoop = false,
  volume = 1,
  autoplay = false
}) => {
  const [isMuted, setIsMuted] = useState(!autoplay)

  useEffect(() => {
    music.volume = volume
    music.autoplay = autoplay
    music.loop = isLoop
  }, [])

  useEffect(() => {
    if (isMuted) {
      music.pause()
      return
    }
    music.play()
  }, [isMuted])

  const handlePlay = () => {
    setIsMuted(false)
    music.play()
  }

  const handleStop = () => {
    music.pause()
    music.currentTime = 0
  }

  return { isMuted, setIsMuted, onPlay: handlePlay, onStop: handleStop }
}
