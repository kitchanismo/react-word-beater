import React from 'react'

import MainScreen from './components/MainScreen'
import Game from './components/Game'
import Countdown from './components/Countdown'

const App = () => {
  return (
    <MainScreen>
      <Countdown>
        <Game />
      </Countdown>
    </MainScreen>
  )
}

export default App
