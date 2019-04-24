import { useState, useEffect } from 'react'

export const useGame = ({ isMatched, length }) => {
  const DEFAULT_TIMER = 20
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [points, setPoints] = useState(0)
  const [timerBase, setTimerBase] = useState(DEFAULT_TIMER)

  const handleLevelUp = (tb, lvl) => {
    setTimerBase(tb)
    setLevel(lvl)
  }

  // points base on word length
  const generatePoints = length => {
    if (length >= 12) {
      return 25
    } else if (length >= 9) {
      return 20
    } else if (length >= 6) {
      return 15
    } else if (length <= 5) {
      return 10
    }
  }

  useEffect(() => {
    if (isMatched) {
      if (score >= 200) {
        handleLevelUp(3, 6) // lvl 6: 3s
      } else if (score >= 125) {
        handleLevelUp(6, 5) // lvl 5: 6s
      } else if (score >= 100) {
        handleLevelUp(9, 4) // lvl 4: 9s
      } else if (score >= 75) {
        handleLevelUp(12, 3) // lvl 3: 12s
      } else if (score >= 50) {
        handleLevelUp(15, 2) // lvl 2: 15s
      }

      if (length >= 12) {
        setPoints(25)
      } else if (length >= 6) {
        setPoints(20)
      } else if (length >= 4) {
        setPoints(15)
      } else setPoints(10)
    }

    setScore(score + points)

    console.log(points)
  }, [isMatched])

  const handleReset = () => {
    setPoints(10)
    setLevel(1)
    setScore(0)
    setTimerBase(DEFAULT_TIMER)
  }

  return { score, level, points, timerBase, onReset: handleReset }
}
