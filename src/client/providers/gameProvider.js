import React, { useState, useEffect } from 'react'

import { GameContext } from './../context'
import { useMatchingWord } from '../hooks/useMatchingWord'
import { useGame } from '../hooks/useGame'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useGreetings } from './../hooks/useGreetings'

export const GameProvider = props => {
  const [currentWord, setCurrentWord] = useState(undefined)
  const [typedWord, setTypedWord] = useState('')

  const { isMatched } = useMatchingWord(typedWord, currentWord)
  const { points, score, ...game } = useGame(isMatched)

  const storage = useLocalStorage(score)
  const greetings = useGreetings(isMatched, points)

  return (
    <GameContext.Provider
      value={{
        ...storage,
        ...game,
        ...greetings,
        score,
        currentWord,
        typedWord,
        isMatched,
        setCurrentWord,
        setTypedWord
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}
