import { useState, useEffect } from 'react'

export const useGame = hasScore => {
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [points, setPoints] = useState(10)

  useEffect(() => {
    if (hasScore) {
      if (score >= 50) {
        setLevel(2)
        setPoints(15)
      }
      setScore(score + points)
    }
  }, [hasScore])

  const handleReset = () => {
    setScore(0)
    setLevel(1)
    setPoints(10)
  }

  return { score, level, points, onReset: handleReset }
}
