import React from 'react'

import MainScreen from './components/MainScreen'
import { GameProvider } from './providers/gameProvider'

const App = () => {
  return (
    <GameProvider>
      <MainScreen />
    </GameProvider>
  )
}

export default App
