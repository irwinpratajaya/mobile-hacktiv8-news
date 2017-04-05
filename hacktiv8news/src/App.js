import React from 'react'
import { Navigator } from 'react-native'

import Home from './components/Home'
import People from './components/People'

const App = () => (
  <Navigator
    initialRoute={{ title: 'home', newsobj: {} }}
    renderScene={(route, navigator) => {
      switch (route.title) {
        case 'home':
          return <Home navigator={navigator} />
        case 'people':
          return <People navigator={navigator} />
        default:
          return <Home />

      }
    }}
  />
)

export default App
