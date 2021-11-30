import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  return (
    <div style={{ color: 'var(--color-green-500)', fontWeight: 'var(--fontWeight-extrabold)' }}>
      HI
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
