import { useState, useEffect } from 'react'

export const useTimer = (initTimer, interval = 1000) => {
  const [timer, setTimer] = useState(initTimer)

  useEffect(() => {
    const gameTimer = setInterval(() => {
      if (timer <= 0) {
        clearInterval(gameTimer)
        return
      }
      setTimer(timer => timer - 1)
    }, interval)
    return () => clearInterval(gameTimer)
  })

  return [timer, setTimer]
}
