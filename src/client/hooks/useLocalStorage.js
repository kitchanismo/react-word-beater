import { useState, useEffect } from 'react'

export const useLocalStorage = score => {
  const [highScore, setHighScore] = useState(0)
  const [lastScore, setLastScore] = useState(0)

  const saveScore = (highScore, lastScore) => {
    localStorage.setItem(
      'wordBeaterStats',
      JSON.stringify({
        highScore,
        lastScore
      })
    )
  }

  useEffect(() => {
    if (localStorage.wordBeaterStats) {
      const stats = JSON.parse(localStorage.getItem('wordBeaterStats'))

      setLastScore(stats.lastScore)
      setHighScore(stats.highScore)
    }
  }, [])

  useEffect(() => {
    if (localStorage.wordBeaterStats) {
      const stats = JSON.parse(localStorage.getItem('wordBeaterStats'))
      const highScore = stats.highScore || 0
      const newHighScore = score > highScore ? score : highScore

      setHighScore(newHighScore)
      setLastScore(stats.lastScore)

      saveScore(newHighScore, score)
    } else {
      saveScore(score, score)
    }
  }, [score])

  return { highScore, lastScore }
}
