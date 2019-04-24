import { useState, useEffect } from 'react'

export const useSaveScore = trigger => {
  const [highScore, setHighScore] = useState(0)
  const [lastScore, setLastScore] = useState(0)

  useEffect(() => {
    if (localStorage.wordBeaterStats) {
      const stats = JSON.parse(localStorage.getItem('wordBeaterStats'))

      setLastScore(stats.lastScore)
      setHighScore(stats.highScore)
    }
  }, [trigger])

  return { highScore, lastScore }
}
