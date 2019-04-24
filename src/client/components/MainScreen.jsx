import React, { useState } from 'react'
import Countdown from './Countdown'

const MainScreen = props => {
  const [start, setStart] = useState(false)

  const handleStart = () => {
    setStart(true)
  }

  if (start) return <Countdown onSetStart={setStart} />

  return (
    <div className="beater__main fadeIn">
      <h1 className="beater__main-title">Word Beater</h1>
      <p className="beater__main-subtitle">
        Do you have what is takes to become the fastest and accurate typist?
        Type every single word correctly in a given time limit to become a word
        beater master!
      </p>
      <button className="button--primary button--big" onClick={handleStart}>
        Start Game
      </button>

      <div className="copyright">
        <span>
          Music used in this game is not mine, downloaded from &nbsp;
          <a href="https://zedge.net" target="_blank">
            Zedge
          </a>
          &nbsp; and &nbsp;
          <a href="https://www.youtube.com/watch?v=OrPEoqp4sjg" target="_blank">
            Alumo Music on Youtube
          </a>
        </span>
      </div>
    </div>
  )
}

export default MainScreen
