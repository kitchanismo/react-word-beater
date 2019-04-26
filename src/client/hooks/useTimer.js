import { useState, useEffect } from 'react'

export const useTimer = (initTimer, order = 'des', interval = 1000) => {
  const [timer, setTimer] = useState(order === 'des' ? initTimer : 0)

  useEffect(() => {
    const gameTimer = setInterval(() => {
      if (order === 'des') {
        if (timer <= 0) {
          clearInterval(gameTimer)
          return
        }
        setTimer(timer => timer - 1)
      } else {
        if (timer >= initTimer) {
          clearInterval(gameTimer)
          return
        }
        setTimer(timer => timer + 1)
      }
    }, interval)
    return () => clearInterval(gameTimer)
  })

  return [timer, setTimer]
}
