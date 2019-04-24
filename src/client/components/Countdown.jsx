import React from 'react'
import { useTimer } from './../customHooks/useTimer'

const Countdown = props => {
  const [count] = useTimer(5)

  if (count <= 0) return <React.Fragment>{props.children}</React.Fragment>

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
