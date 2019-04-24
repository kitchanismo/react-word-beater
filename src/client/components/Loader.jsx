import React from 'react'
import { useTimer } from './../hooks/useTimer'

const Loader = props => {
  const [timer] = useTimer(2)

  if (timer <= 0) return props.children

  return (
    <div className="loader" id="loader">
      <div className="loader__head">
        <div className="first-indicator" />
        <div className="second-indicator" />
      </div>

      <h4>Loading</h4>
    </div>
  )
}

export default Loader
