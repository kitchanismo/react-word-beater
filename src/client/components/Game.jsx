import React, { useRef, useState, useEffect } from 'react'
import GameOver from './GameOver'

import { generateWord } from '../helpers/random-word'

import { useMatchingWord } from '../customHooks/useMatchingWord'
import { useGame } from '../customHooks/useGame'
import { useTimer } from '../customHooks/useTimer'
import { useSaveScore } from './../customHooks/useSaveScore'
import { useGreetings } from './../customHooks/useGreetings'

const Game = props => {
  const [currentWord, setCurrentWord] = useState(undefined)
  const [typedWord, setTypedWord] = useState('')

  const [timer, setTimer] = useTimer(20)

  const { highScore, lastScore } = useSaveScore(timer <= 0)

  const { isMatch } = useMatchingWord(typedWord, currentWord)
  const { score, level, points, onReset } = useGame(isMatch)
  const { greetingWrapper, pointsWrapper } = useGreetings(isMatch, points)

  //  like componentDidMount
  useEffect(() => {
    setCurrentWord(generateWord())
  }, [])

  // act like componentDidUpdate with isMatch as dependency
  useEffect(() => {
    if (isMatch) {
      setTypedWord('')
      setCurrentWord(generateWord())
      setTimer(20)
    }
  }, [isMatch])

  const handleChange = e => {
    const input = e.target.value.toLowerCase().trim()
    setTypedWord(input)
  }

  const isGameOver = () => timer <= 0

  const handleReset = () => {
    onReset()
    setTimer(20)
  }

  if (isGameOver()) {
    return (
      <GameOver
        gameData={{ score, level, highScore, lastScore }}
        initGame={() => handleReset()}
        quitGame={() => score}
      />
    )
  }

  const visibleCurrentWord = useRef(null)

  const handleKeyUp = e => {
    const input = e.target.value
    const regExp = new RegExp(input, 'g')

    visibleCurrentWord.current.innerHTML = currentWord
    if (input.trim() !== '') {
      visibleCurrentWord.current.innerHTML = currentWord.replace(
        regExp,
        match => {
          return `<span class="matched">${match}</span>`
        }
      )
    }
  }

  // array: [color, textShadow]
  const levelColor = {
    1: ['#fff', 'rgba(255, 255, 255, .4)'],
    2: ['#488ca1', 'rgba(72, 140, 161, .4)'],
    3: ['#99da00', 'rgba(153, 218, 0, .4)'],
    4: ['#F9E606', 'rgba(249, 230, 6, .4)'],
    5: ['#ED06FB', 'rgba(237, 6, 251, .4)'],
    6: ['#9B1BEA', 'rgba(155, 27, 234, .4)']
  }

  return (
    <div className="beater__game fadeIn">
      <div className="beater__game-wrapper">
        <div className="beater__game-greet" ref={greetingWrapper} />
        <div className="beater__game-current">
          <p>TYPE THE WORD</p>
          <h1 ref={visibleCurrentWord}>{currentWord}</h1>
        </div>
        <div className="beater__game-widgets">
          <div className="beater__game-widgets-wrapper">
            <span>Level</span>
            <h2
              style={{
                color: levelColor[level][0],
                textShadow: `0 0 15px ${levelColor[level][1]}`
              }}
            >
              {level}
            </h2>
          </div>
          <div className="beater__game-widgets-wrapper">
            <span>Time</span>
            <h2 className={timer <= 3 ? 'timeRunningOut' : null}>{timer}</h2>
          </div>
          <div className="beater__game-widgets-wrapper">
            <span>Score</span>
            <div ref={pointsWrapper}>
              <h2>{score}</h2>
            </div>
          </div>
        </div>
        <input
          autoFocus
          className="beater__game-input"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder="Start Typing Now!"
          type="text"
          value={typedWord}
        />
      </div>
    </div>
  )
}

export default Game
