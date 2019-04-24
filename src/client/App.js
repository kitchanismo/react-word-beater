import React from 'react'

import Game from './components/Game'
import { GameProvider } from './providers/gameProvider'

const App = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default App
