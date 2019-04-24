import { useState, useEffect } from 'react'

export const useGame = ({ isMatched }) => {
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [points, setPoints] = useState(10)

  useEffect(() => {
    if (isMatched) {
      if (score >= 50) {
        setLevel(2)
        setPoints(15)
      } else if (score >= 100) {
        setLevel(3)
        setPoints(20)
      }

      setScore(score + points)
    }
  }, [isMatched])

  const handleReset = () => {
    setScore(0)
    setLevel(1)
    setPoints(10)
  }

  return { score, level, points, onReset: handleReset }
}
