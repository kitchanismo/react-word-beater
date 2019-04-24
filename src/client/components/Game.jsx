import React, { useRef, useEffect, useContext } from 'react'
import GameOver from './GameOver'
import { GameContext } from '../context'
import { useTimer } from '../hooks/useTimer'
import { generateWord } from '../helpers/random-word'

import withCountdown from './hoc/withCountdown'
import withMainScreen from './hoc/withMainScreen'

const TIMER = 5
const COUNT = 3

const Game = props => {
  const {
    isMatch,
    currentWord,
    typedWord,
    highScore,
    lastScore,
    score,
    level,
    greetingWrapper,
    pointsWrapper,
    setTypedWord,
    setCurrentWord,
    onReset
  } = useContext(GameContext)

  const [timer, setTimer] = useTimer(TIMER)

  //  like componentDidMount
  useEffect(() => {
    setCurrentWord(generateWord())
  }, [])

  // act like componentDidUpdate with isMatch as dependency
  useEffect(() => {
    if (isMatch) {
      setTypedWord('')
      setCurrentWord(generateWord())
      setTimer(TIMER)
    }
  }, [isMatch])

  const handleChange = e => {
    const input = e.target.value.toLowerCase().trim()

    if (input.length > currentWord.length) return

    setTypedWord(input)
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

  const handleTryAgain = () => {
    props.onSetCount(COUNT)
    onReset()
  }

  const handleQuit = () => {
    props.onSetStart(false)
    onReset()
  }

  if (timer <= 0) {
    return (
      <GameOver
        gameData={{ score, level, highScore, lastScore }}
        onQuit={handleQuit}
        onTryAgain={handleTryAgain}
      />
    )
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

export default withMainScreen(withCountdown(Game))
