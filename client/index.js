import React from 'react'
import ReactDOM from 'react-dom'

// establishes socket connection
import './socket'

const App = () => {
  return (
    <div>
      <p>Shelter-in-Pets</p>
    </div>
  )
}

ReactDOM.render(
  <App />,

  document.getElementById('app')
)
