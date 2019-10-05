import React from 'react'
import ReactDOM from 'react-dom'
import vast from './vast.gif'
import './App.css'
import Button from './components/Button'
import Canvas from './components/Canvas'

const App = () => {

  const render_canvas = () => {
    ReactDOM.render(<Canvas line={initial_line} choices={choices} filename={initial_filename} />, document.getElementById('root'))
  }

  const initial_line = 'Hello young fellow, can you hear me?'

  const choices = [
    'Perfectly.',
    'No.',
    'Remain silent.'
  ]

  const initial_filename = 'start'

  return (
    <div className="App">
      <header className="App-header">
        <img src={vast} className="App-logo" alt="logo" />
        <h1>Vast</h1>
        <Button text='Start' handleClick={render_canvas} />
        <p>(Turn on sound)</p>
      </header>
    </div>
  )
}

export default App
