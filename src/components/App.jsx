import React from 'react'

import { Sheet } from './Sheet.jsx'
import './app.css'
import characterData from '../characterData.json'

const App = (props) => {
  return (
    <div className="container-large pad-top">
      <Sheet characterData={characterData} />
    </div>
  )
}

export default App
