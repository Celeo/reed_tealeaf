import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'

import 'materialize-css/dist/css/materialize.min.css'

render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    render(<App />, document.getElementById('app'))
  })
}
