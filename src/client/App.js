import React from 'react'

import Game from './components/Game'
import Loader from './components/Loader'
import { GameProvider } from './providers/gameProvider'
import Music from './components/Music'

const App = () => {
  return (
    <GameProvider>
      <Loader>
        <Music />
        <Game />
      </Loader>
    </GameProvider>
  )
}

export default App
