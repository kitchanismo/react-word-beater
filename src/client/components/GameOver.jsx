import React, { useContext, useEffect } from 'react'
import { GameContext } from '../context'
import { useSound } from '../hooks/useSound'
import { gameover } from '../helpers/sound'

const GameOver = ({ onQuit, onTryAgain }) => {
  const { highScore, lastScore, score, level } = useContext(GameContext)

  const { onPlay: onGameOver, onStop } = useSound({ music: gameover })

  useEffect(() => {
    onGameOver()
    return () => onStop()
  }, [])

  return (
    <div className="beater__gameover fadeIn">
      <h1 className="beater__gameover-title">Game Over</h1>
      <div className="beater__gameover-summary">
        <h2>Final Score:</h2>
        <h2>{score}</h2>
      </div>
      <div className="beater__gameover-summary">
        <h2>Level Reached:</h2>
        <h2>{level}</h2>
      </div>
      {!!highScore && (
        <div className="beater__gameover-summary">
          <h2>High Score:</h2>
          <h2>{highScore}</h2>
        </div>
      )}
      {!!lastScore && (
        <div className="beater__gameover-summary">
          <h2>Previous Score:</h2>
          <h2>{lastScore}</h2>
        </div>
      )}

      <div className="beater__main-actions">
        <button
          className="button--primary button--big"
          onClick={() => onTryAgain()}
        >
          Try Again
        </button>
        <button
          className="button--secondary button--big"
          onClick={() => onQuit()}
        >
          Quit
        </button>
      </div>
    </div>
  )
}

export default GameOver
