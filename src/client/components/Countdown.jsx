import React from 'react'
import { useTimer } from './../customHooks/useTimer'
import Game from './Game'

const Countdown = props => {
  const [count, setCount] = useTimer(3)

  if (count <= 0)
    return <Game onSetCount={setCount} onSetStart={props.onSetStart} />

  return (
    <React.Fragment>
      <div className="beater__countdown">
        <h1>Game will start in </h1>
        <h1 className="beater__countdown-count">{count}</h1>
        <br />
        <p>Get ready!</p>
      </div>
    </React.Fragment>
  )
}

export default Countdown
