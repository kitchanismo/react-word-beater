import { useState, useEffect } from 'react'

export const useGame = ({ isMatched }) => {
  const DEFAULT_TIMER = 20
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [points, setPoints] = useState(10)
  const [timerBase, setTimerBase] = useState(DEFAULT_TIMER)

  const handleLevelUp = (tb, lvl, ps = DEFAULT_TIMER) => {
    setTimerBase(tb)
    setLevel(lvl)
    setPoints(ps)
  }

  useEffect(() => {
    if (score >= 200) {
      handleLevelUp(3, 6, 25) // lvl 6: 3s
    } else if (score >= 125) {
      handleLevelUp(6, 5, 13) // lvl 5: 6s
    } else if (score >= 100) {
      handleLevelUp(9, 4, 20) // lvl 4: 9s
    } else if (score >= 75) {
      handleLevelUp(12, 3, 18) // lvl 3: 12s
    } else if (score >= 50) {
      handleLevelUp(15, 2, 15) // lvl 2: 15s
    }

    if (isMatched) {
      setScore(score + points)
    }
  }, [isMatched])

  const handleReset = () => {
    setPoints(10)
    setLevel(1)
    setScore(0)
    setTimerBase(DEFAULT_TIMER)
  }

  return { score, level, points, timerBase, onReset: handleReset }
}
