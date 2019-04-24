import React, { useState, useEffect } from 'react'

import { GameContext } from './../context'
import { useMatchingWord } from '../hooks/useMatchingWord'
import { useGame } from '../hooks/useGame'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useGreetings } from './../hooks/useGreetings'

export const GameProvider = props => {
  const [currentWord, setCurrentWord] = useState(undefined)
  const [typedWord, setTypedWord] = useState('')

  const { isMatch } = useMatchingWord(typedWord, currentWord)
  const { points, score, ...game } = useGame(isMatch)

  const storage = useLocalStorage(score)
  const greetings = useGreetings(isMatch, points)

  return (
    <GameContext.Provider
      value={{
        ...storage,
        ...game,
        ...greetings,
        score,
        currentWord,
        typedWord,
        isMatch,
        setCurrentWord,
        setTypedWord
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}
