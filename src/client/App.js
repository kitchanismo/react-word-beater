import React from 'react'

import Game from './components/Game'
import Loader from './components/Loader'
import { GameProvider } from './providers/gameProvider'

const App = () => {
  return (
    <GameProvider>
      <Loader>
        <Game />
      </Loader>
    </GameProvider>
  )
}

export default App
