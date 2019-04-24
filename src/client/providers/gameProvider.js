import React, { useState, useEffect } from 'react'

import { GameContext } from './../context'
import { useMatchingWord } from '../hooks/useMatchingWord'
import { useGame } from '../hooks/useGame'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useGreeting } from '../hooks/useGreeting'

export const GameProvider = props => {
  const [currentWord, setCurrentWord] = useState(undefined)
  const [typedWord, setTypedWord] = useState('')

  const { isMatched } = useMatchingWord({
    firstWord: typedWord,
    secondWord: currentWord
  })

  const { points, score, ...game } = useGame({ isMatched: isMatched })

  const storage = useLocalStorage(score)
  const greetings = useGreeting({ isMatched, points })

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
