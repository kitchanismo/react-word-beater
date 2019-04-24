import React, { useState, useEffect } from 'react'

import { GameContext } from './../context'
import { useMatchingWord } from '../customHooks/useMatchingWord'
import { useGame } from '../customHooks/useGame'
import { useSaveScore } from './../customHooks/useSaveScore'
import { useGreetings } from './../customHooks/useGreetings'

export const GameProvider = props => {
  const [currentWord, setCurrentWord] = useState(undefined)
  const [typedWord, setTypedWord] = useState('')

  const saveScore = useSaveScore('dummy')

  const { isMatch } = useMatchingWord(typedWord, currentWord)
  const { points, ...game } = useGame(isMatch)
  const greetings = useGreetings(isMatch, points)

  return (
    <GameContext.Provider
      value={{
        ...saveScore,
        ...game,
        ...greetings,
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
