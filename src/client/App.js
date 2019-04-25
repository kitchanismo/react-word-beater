import React from 'react'

import Game from './components/Game'
import Loader from './components/Loader'
import Music from './components/Music'

const App = () => {
  return (
    <Loader>
      <Music />
      <Game />
    </Loader>
  )
}

export default App
