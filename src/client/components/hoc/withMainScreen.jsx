import React, { useState } from 'react'

const withMainScreen = Component => props => {
  const [start, setStart] = useState(false)

  if (start) return <Component onSetStart={setStart} {...props} />

  return (
    <div className="beater__main fadeIn">
      <h1 className="beater__main-title">Word Beater</h1>
      <p className="beater__main-subtitle">
        Do you have what is takes to become the fastest and accurate typist?
        Type every single word correctly in a given time limit to become a word
        beater master!
      </p>
      <button
        className="button--primary button--big"
        onClick={() => setStart(true)}
      >
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
        <br />
        <span>Powered by ReactJs Hooks</span>
      </div>
    </div>
  )
}

export default withMainScreen
